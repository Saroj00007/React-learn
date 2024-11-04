// import { CDN_LINK } from "../utils/cdn_links";
const Restroitemlist = (props) => {
  const { itemlist } = props;
  console.log(itemlist);

  return (
    <div>
      {itemlist.map((list) => {
        return (
          <div
            key={list.card.info.id}
            className=" h-40 w-100 flex items-center justify-between  mx-4 border border-b-2  shadow-lg cursor-pointer"
          >
            <div className="flex flex-col space-y-1 ml-4">
              <div className="font-semibold"> {list.card.info.name}</div>
              <div>
                Rs.
                {list.card.info.defaultPrice / 100 ||
                  list.card.info.finalPrice / 100 ||
                  list.card.info.price / 100}{" "}
              </div>
              <div>{list.card.info.category}</div>
              {/* <p>list.card.info</p> */}
            </div>
            <div className="relative">
              <span className="absolute  bg-green-500 bottom-0 left-1/4 text-white rounded-md px-2 py-1">
                Add+
              </span>
              <img
                className="h-32 w-40 rounded-lg mr-6 "
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  list.card.info.imageId
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Restroitemlist;
