import { CDN_LINK } from "../utils/cdn_links";

const Restrocard = (props) => {
  const { name, cuisines, costForTwo, avgRating , sla } = props.ResData?.info;
  // const {slaString } =  props.ResData?.info?.sla;

  return (
    <div className="card">
      <img
        className="food"
        src={CDN_LINK + props.ResData.info.cloudinaryImageId}
      />

      <div className="info">
        <h3 className="restro-name">{name}</h3>
        <h4 className="cusines">{cuisines.join(", ")} </h4>
        <h5>{costForTwo}</h5>
        <h5>{avgRating}</h5>
        <h5> {sla.deliveryTime} mins</h5>
      </div>
    </div>
  );
};

export default Restrocard;
