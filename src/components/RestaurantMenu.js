import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
    const {resID} =  useParams();

    // const params= useParams();
    // console.log(params);
    
    const [showIndex,setShowIndex]=useState(0);

    const resInfo = useRestaurantMenu(resID);

    if(resInfo===null) {
         return <Shimmer/>;
    }
    
    const { name, cuisines, costForTwoMessage, sla, locality} = resInfo?.cards[2]?.card?.card?.info;

    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.card?.card?.gridElements?.infoWithStyle?.resturants?.card[0]?.info;

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    
    // if (!itemCards) return <div>No items available.</div>;
    
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
    return (
        <div className="text-center">
            {/* <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1> */}
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
            <h3 className="font-bold text-lg">{locality} - {sla?.deliveryTime} mins</h3>
            {/* accordian */}
            {categories.map((category,index)=>(
                //controlled comp
                <RestaurantCategory 
                // key={index}
                    data={category?.card?.card}
                    showItems={showIndex === index}
                    setShowIndex={()=>setShowIndex(index)} // Pass setShowIndex function
                    index={index}
                // // key={category?.card?.card?.title} 
                // data={category?.card?.card}
                // showItems={showIndex===index}
                // setShowIndex={()=>setShowIndex(index)}
                // index={index}
                />
            ))}
        </div>
    );
};
export default RestaurantMenu;


/**
 <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{"Rs "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
                 <li>{itemCards[0]?.RestaurantMenu?.info?.name}</li> 
               </ul>
 */