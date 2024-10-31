// import restaurantList from "../utils/mockData";
import Restrocard from "./RestroCard";
// importing the usestate()

import { useState , useEffect } from "react";
import Shimer from "./Shimer";
import { reslink } from "../utils/cdn_links";
import { Link } from "react-router-dom";

import useOnlinestatus from "../utils/useOnlinestatus";

// adding the feature implement the filter when the button is clicked

 
const Body = () => {
  //declaring the usestate variable
  // here listofResturant is state variable 
//  console.log("rendered");

console.log(typeof(useState()));


  const  [ listofResturant , setlistofResturant]  = useState( []);
  const [searchval, setsearchval] = useState("");
  const [filteredrestraunt , setfilteredretraunt] = useState([]);

  // const [testval , settestval] = useState(["10"]);
 console.log("body rendered");
 
 

 // use effects - run after rendering 
 useEffect(()=>{
  //  console.log("use effect rendered" + testval);
   fetchdata("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
   console.log("useeffect rerender");
   
 } , []);

// online status 
const status = useOnlinestatus();
console.log(status);

if (status === false) {
  return (
    <div className="text-5xl">
      YOU LOOOKS OFFLINE.PLEASE CHECK YOUR NETWORK CONNECTION
    </div>
  );
};
 
 // fecthing the data 
  let fetchdata = async (link)=>{
    try {
      let data = await fetch(link);
      let json = await data.json();
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

      let reslist = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       
      setlistofResturant(reslist);
      setfilteredretraunt(reslist);
    } catch (error) {
      console.log(error);
      
      
    }
      
  }
  
// shimmer effect  
//conditional rendering
  if(listofResturant.length === 0){
    return(
      <Shimer/>
    )
  }
  

  return (
    <div className="body">
      <div className="search font-semibold">
        <input className="input-field border rounded-md border-y-2"
        type="text" 
        value={searchval}
        placeholder="yaha ho khojne"

        onChange={(e)=>{
           let filteredsearchval = e.target.value;
           setsearchval(filteredsearchval);
        }}
        />
        <button className="btn font-semibold" 
        onClick={()=>{
          //searchedvalue
         let searchedval =  listofResturant.filter((list)=> list.info.name.toLowerCase().includes(searchval.toLowerCase()) );
         setfilteredretraunt(searchedval);

        // console.log(listofResturant[1].info.name.toLowerCase());
 
        }}
        >search</button>
        <button
          className="btn"
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

      <div className="Restro-body">
        {filteredrestraunt.map((list) => {
          return  <Link to={"/restraunt/" +  list.info.id} key={list.info.id}> <Restrocard ResData={list} /> {console.log( list.info.id)
          }</Link>;
         
          
        })}
      </div>
    </div>
  );
};

export default Body;
