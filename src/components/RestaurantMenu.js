import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    const {resID} =  useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL+resID // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=24041&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
        const json = await data.json(); 
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo===null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage, sla, locality} = resInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    if (!itemCards) return <div>No items available.</div>;

    return (
        <div className="menu">
            {/* <h1>name</h1> */}
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{sla?.deliveryTime} mins</h3>
            <h3>{locality}</h3>
            {/* <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{"Rs "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
                <li>{itemCards[0]?.RestaurantMenu?.info?.name}</li>
            </ul> */}
            
        </div>
    )
};
export default RestaurantMenu;