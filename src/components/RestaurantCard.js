import { CDN_URL } from "../utils/constants";

// const RestaurantCard = ({resName, cuisine}) => {
const RestaurantCard = (props) => {
    const {resData}=props;  
    const 
    {
       cloudinaryImageId,
       name, 
       cuisines, 
       avgRating, 
       costForTwo} = resData?.info;
    // use this and optimise code
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId}
            />
            {/* <h3>{resData.info.name}</h3>  */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>Rs {costForTwo}</h5>
            <h5>{resData?.info?.sla?.deliveryTime} min</h5>
        </div>
    )
};

export default RestaurantCard;