import { useState } from "react";
import Restroitemlist from "./Restroitemlist";

const ItemsCategory = ({itemData  , showlist , showindex}) => {

  // const [showlist , setshowlist] = useState(false);

  const handelclick = ()=>{
    // setshowlist(!showlist);
    showindex();
  };

  const { title, itemCards } = itemData?.card?.card;
  return (
    <div onClick={handelclick} className="bg-gray-50 px-4 shadow-md my-2 rounded-lg cursor-pointer ">
      <div className=" flex justify-between mx-4 text-lg py-8 font-semibold">
        <span>
          {title}({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showlist &&  <Restroitemlist itemlist={itemCards} />}
    </div>
  );
};

export default ItemsCategory;
