import { CDN_LINK } from "../utils/cdn_links";

const Restrocard = (props) => {

  const { name, cuisines, costForTwo, avgRating, sla } = props
  .ResData?.info;
  // const {slaString } =  props.ResData?.info?.sla;

  return (
    <div className="  flex flex-col group hover:scale-95 space-y-4 h-[100%]  group  mx-2 rounded-lg border border-gray-200 hover:bg-gray-100 bg-[#f0f0f0] ">
      <img
        className="h-52 w-52 mx-auto mt-4 rounded-lg  bg-cover"
        src={CDN_LINK + props.ResData.info.cloudinaryImageId}
      />

      <div className="info flex flex-col ml-3 mb-3">
        <h3 className="restro-name  font-semibold">{name}</h3>
        <h4 className="cusines">{cuisines.join(", ")} </h4>
        <h5>{costForTwo}</h5>
        <h5>{avgRating}</h5>
        <h5> {sla.deliveryTime} mins</h5>
      </div>
    </div>
  );
};

export const Promotedlist = (Restrocard)=>{
  const List = (props)=>{
   return (
    <>
    <label className="absolute bg-gray-800 mx-3 mt-3 px-2 my-auto h-8 group-hover:scale-95 z-50 text-white rounded-md">recomended</label>
    <Restrocard  {...props}/>
    </>
   );
  };

  return List;
}


export default Restrocard;
