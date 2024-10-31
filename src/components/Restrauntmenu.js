import { useParams } from "react-router-dom";
import useRestrauntmenu from "../utils/useRestrauntmenu";
import Shimer from "./Shimer";
import { CDN_LINK } from "../utils/cdn_links";
import { useState, useEffect } from "react";
import { Resmenulink } from "../utils/cdn_links";

const Restrauntmenu = () => {

  const { resid } = useParams();

  const resmenu = useRestrauntmenu(resid);

  if (resmenu === null) {
    return <Shimer />;            
  };


  
    const { id, name, cuisines, costForTwo } =
      resmenu?.data?.cards[2].card?.card?.info;

    const { itemCards } =
      resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    console.log(itemCards);

    const { itemCards: list } =
      resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



    return (
      <div className="menu flex flex-col  justify-center border rounded-md mt-6 my-6 p-8 mx-8 border-x-4 border-y-4 space-y-4">
        <h1 className="font-extrabold text-3xl">{name}</h1>
        <h2 className="font-semibold">
          {cuisines.join(", ")} - Rs.{costForTwo / 100}
        </h2>
        <h3 className="font-semibold text-xl font-sans mx-auto">menu list</h3>
        <ul className="flex flex-col space-y-8 w-120">
          {resid != 855478
            ? itemCards.map((list) => {
                return (
                  <div
                    key={list.card.info.id}
                    className=" h-40 w-100 flex items-center justify-between bg-[#f0f0f0] rounded-lg shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col space-y-3 ml-4">
                      <div className="font-semibold"> {list.card.info.name}</div>
                      <div>
                        Rs.
                        {list.card.info.defaultPrice ||
                          list.card.info.finalPrice / 100 ||
                          list.card.info.price / 100}{" "}
                      </div>
                      <div>{list.card.info.category}</div>
                    </div>

                    <img
                      className="h-32 w-40 rounded-lg mr-4 "
                      src={CDN_LINK + list.card.info.imageId}
                    />
                  </div>
                );
              })
            : list.map((list) => {
                return (
                  <div
                    key={list.card.info.id}
                    className=" h-40 w-100 flex items-center justify-between bg-[#f0f0f0] rounded-lg shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col ml-4">
                      <div className="font-semibold"> {list.card.info.name}</div>
                      <div>
                        Rs.
                        {list.card.info.defaultPrice ||
                          list.card.info.finalPrice / 100 ||
                          list.card.info.price / 100}{" "}
                      </div>
                      <div>{list.card.info.category}</div>
                    </div>

                    <img
                      className="h-32 w-40 rounded-lg mr-4 "
                      src={CDN_LINK + list.card.info.imageId}
                    />
                  </div>
                );
              })}
        </ul>
      </div>
    );
};

export default Restrauntmenu;
