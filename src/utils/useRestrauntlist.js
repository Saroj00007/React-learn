import { useEffect, useState } from "react";
import { reslink } from "./cdn_links";

const useRestrauntlist = () => {
  const [Reslist, setReslist] = useState([]);
  const [filteredrestraunt , setfilteredretraunt] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async ()=>{
    try {
      let data = await fetch(reslink);
      let json = await data.json();
    //   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

      let reslist = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       
      setlistofResturant(reslist);
      setfilteredretraunt(reslist);
    } catch (error) {
      console.log(error);  
    }   
  }

  return Reslist;
};

export default useRestrauntlist;