// import restaurantList from "../utils/mockData";
import Restrocard from "./RestroCard";
// importing the usestate()

import { useState , useEffect } from "react";
import Shimer from "./Shimer";

// adding the feature implement the filter when the button is clicked

 
const Body = () => {
  //declaring the usestate variable
  // here listofResturant is state variable 
 console.log("rendered");

  const  [ listofResturant , setlistofResturant]  = useState( []);
  const [searchval, setsearchval] = useState("");
  const [filteredrestraunt , setfilteredretraunt] = useState([]);


 // use effects - run after rendering 
 useEffect(()=>{
   fetchdata("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
 } , [])
   
  

 // fecthing the data 
  let fetchdata = async (link)=>{
      let data = await fetch(link);
      let json = await data.json();
      // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

      let reslist = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       
      setlistofResturant(reslist);
      setfilteredretraunt(reslist);
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
      <div className="search">
        <input className="input-field"
        type="text" 
        value={searchval}
        placeholder="yaha ho khojne"

        onChange={(e)=>{
           let filteredsearchval = e.target.value;
           setsearchval(filteredsearchval);
        }}
        />
        <button className="btn" 
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
          return <Restrocard key={list.info.id} ResData={list} />;
        })}
      </div>
    </div>
  );
};

export default Body;
