// import restaurantList from "../utils/mockData";
import Restrocard , {Promotedlist} from "./RestroCard";
// importing the usestate()

import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { reslink } from "../utils/cdn_links";
import { Link } from "react-router-dom";

import useOnlinestatus from "../utils/useOnlinestatus";
import useRestrauntlist from "../utils/useRestrauntlist";

// adding the feature implement the filter when the button is clicke

const Body = () => {
  //declaring the usestate variable
  // here listofResturant is state variable
  //  console.log("rendered");
const Newlist = Promotedlist(Restrocard);

  console.log(typeof useState());

  const [listofResturant, setlistofResturant] = useState([]);
  const [searchval, setsearchval] = useState("");
  const [filteredrestraunt, setfilteredretraunt] = useState([]);

  // const [testval , settestval] = useState(["10"]);
  console.log("body rendered");

 
  // use effects - run after rendering
  useEffect(() => {
    fetchdata(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("useeffect rerender");
  }, []);

  // online status
  const status = useOnlinestatus();
  // console.log(status);

  if (status === false) {
    return (
      <div className="text-5xl">
        YOU LOOOKS OFFLINE.PLEASE CHECK YOUR NETWORK CONNECTION
      </div>
    );
  }

  // fecthing the data
  let fetchdata = async (link) => {
    try {
      let data = await fetch(link);
      let json = await data.json();
      console.log(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );

      let reslist =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setlistofResturant(reslist);
      setfilteredretraunt(reslist);

      console.log(listofResturant);
    } catch (error) {
      console.log(error);
    }
  };

  // shimmer effect
  //conditional rendering
  if (listofResturant.length === 0) {
    return <Shimer />;
  }

  return (
    <div className="body ">
      <div className="search font-semibold flex space-x-5 justify-center mb-12">
        <input
          className="input-field border rounded-md border-y-2 w-60 p-2"
          type="text"
          value={searchval}
          placeholder="yaha ho khojne"
          onChange={(e) => {
            let filteredsearchval = e.target.value;
            setsearchval(filteredsearchval);
          }}
        />
        <button
          className="px-4 py-1 bg-green-500 text-white font-semibold rounded-sm"
          onClick={() => {
            //searchedvalue
            let searchedval = listofResturant.filter((list) =>
              list.info.name.toLowerCase().includes(searchval.toLowerCase())
            );
            setfilteredretraunt(searchedval);

            // console.log(listofResturant[1].info.name.toLowerCase());
          }}
        >
          search
        </button>
        <button
          className="px-4 py-1 bg-green-500 text-white font-semibold rounded-sm"
          onClick={() => {
            let filteredlist = listofResturant.filter((list) => {
              return list.info.avgRating > 4.3;
            });
            setfilteredretraunt(filteredlist);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="grid-cols-4 grid mx-24 gap-4">
        {filteredrestraunt.map((list) => {
          return (
            <Link to={"/restraunt/" + list.info.id} key={list.info.id}>
             
             {(list.info.avgRating > 4.5)? 

              <Newlist ResData={list} />

                :  <Restrocard ResData={list} />} 
             
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
