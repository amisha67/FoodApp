import { CDN_URL } from "../utils/constants";

// const RestaurantCard = ({resName, cuisine}) => {
const RestaurantCard = (props) => {
    const {resData}=props; 
    // console.log(props); 
    const 
    {
       cloudinaryImageId,
       name, 
       cuisines, 
       avgRating, 
       costForTwo} = resData?.info;
    // use this and optimise code
    
  
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[200px] rounded-lg hover:bg-gray-200">
            <img 
                className="rounded-lg" 
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId}
            />
            {/* <h3>{resData.info.name}</h3>  */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>Rs {costForTwo}</h5>
            <h5>{resData?.info?.sla?.deliveryTime} min</h5>
        </div>
    )
};

export const withPromotedLabel=(RestaurantCard)=>{
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    };
};

export default RestaurantCard;
