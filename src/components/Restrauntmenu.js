import { useParams } from "react-router-dom";
import useRestrauntmenu from "../utils/useRestrauntmenu";
import Shimer from "./Shimer";
import { CDN_LINK } from "../utils/cdn_links";
import { useState, useEffect } from "react";
import { Resmenulink } from "../utils/cdn_links";
import ItemsCategory from "./ItemsCategory";

const Restrauntmenu = () => {
  const { resid } = useParams();

  const resmenu = useRestrauntmenu(resid);

 
const [Index , setIndex] = useState(0)

  if (resmenu === null) {
    return <Shimer />;
  }

  const { id, name, cuisines, costForTwo ,totalRatingsString ,avgRatingString } =
    resmenu?.data?.cards[2].card?.card?.info;
    console.log(  resmenu?.data?.cards[2].card?.card?.info);
    

  // const { itemCards } =
  //   resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     .card;
  // console.log(itemCards  );
  // console.log("old one");
  

  // const { itemCards: list } =
  //   resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card;

  // console.log(
  //   resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

 const itemcatogery = resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((list)=>{
    return list.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  // console.log(itemcatogery);
  

  // return (
  //   <div className="menu flex flex-col  justify-center border rounded-md mt-6 my-6 p-8 mx-8 border-x-4 border-y-4 space-y-4">
  //     <h1 className="font-extrabold text-3xl">{name}</h1>
  //     <h2 className="font-semibold">
  //       {cuisines.join(", ")} - Rs.{costForTwo / 100}
  //     </h2>
  //     <h3 className="font-semibold text-xl font-sans mx-auto">menu list</h3>
  //     <ul className="flex flex-col space-y-8 w-120">
  //       {resid != 855478
  //         ? itemCards.map((list) => {
  //             return (
  //               <div
  //                 key={list.card.info.id}
  //                 className=" h-40 w-100 flex items-center justify-between bg-[#f0f0f0] rounded-lg shadow-lg cursor-pointer"
  //               >
  //                 <div className="flex flex-col space-y-3 ml-4">
  //                   <div className="font-semibold"> {list.card.info.name}</div>
  //                   <div>
  //                     Rs.
  //                     {list.card.info.defaultPrice ||
  //                       list.card.info.finalPrice / 100 ||
  //                       list.card.info.price / 100}{" "}
  //                   </div>
  //                   <div>{list.card.info.category}</div>
  //                 </div>

  //                 <img
  //                   className="h-32 w-40 rounded-lg mr-4 "
  //                   src={CDN_LINK + list.card.info.imageId}
  //                 />
  //               </div>
  //             );
  //           })
  //         : list.map((list) => {
  //             return (
  //               <div
  //                 key={list.card.info.id}
  //                 className=" h-40 w-100 flex items-center justify-between bg-[#f0f0f0] rounded-lg shadow-lg cursor-pointer"
  //               >
  //                 <div className="flex flex-col ml-4">
  //                   <div className="font-semibold"> {list.card.info.name}</div>
  //                   <div>
  //                     Rs.
  //                     {list.card.info.defaultPrice ||
  //                       list.card.info.finalPrice / 100 ||
  //                       list.card.info.price / 100}{" "}
  //                   </div>
  //                   <div>{list.card.info.category}</div>
  //                 </div>

  //                 <img
  //                   className="h-32 w-40 rounded-lg mr-4 "
  //                   src={CDN_LINK + list.card.info.imageId}
  //                 />
  //               </div>
  //             );
  //           })}
  //     </ul>
  //   </div>
  // );

  return(
    <div className="flex flex-col  w-9/12 mx-auto" >

   <h1 className="text-4xl font-bold">{name}</h1>

   <div className="font-semibold flex gap-2">
    <span>{avgRatingString}({totalRatingsString})</span>
    <span>रु.{costForTwo}</span>
   </div>
   <div className="text-red-500 font-semibold cursor-pointer underline">{cuisines}</div>
  <h2 className="mt-4 text-2xl font-bold">Menu List</h2>
  {itemcatogery.map((list , index)=>{
    return  <ItemsCategory
    // key={list. itemData?.card?.card.title}
    itemData={list}
    showlist = {index === Index ? true :false}
    showindex = { ()=>setIndex(index) }

    />
  })}
    </div>
  )


};


export default Restrauntmenu;
