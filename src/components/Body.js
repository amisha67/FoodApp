import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    // state variable
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    // comment{
    // reslist is the default value of listofrest

    // const [listOfRestaurants,setlistOfRestaurants] = arr and arr = useState(re);

    // normal js variable
    // let listOfRestaurants=[...lists of restau];

    //cant modify like listOfReastaurant =[] in place of that there comes setlistOfRestaurants


    // let list=[]
    // list=["updated"]
    // }

    useEffect( () => {
        console.log("called useEffect?");
        fetchData();
        // console.log("?")
    },[]);
    console.log("kb");

    const fetchData= async ()=>{
        console.log("?")
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ) 
        const json = await data.json();
        console.log(json);
        console.log("?")
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>;
    // }

    return listOfRestaurants.length===null ? <Shimmer/> : (
        <div className="body" >
            <div className="filter">
                <div className="search-cont">
                    <input className="search-box" type="text" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        // filter rescard and update ui
                        // trackking input value
                        console.log(searchText);
                        // filter kroo ui ko
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        console.log("kaam kr rha");
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.info.avgRating > 5
                        ); 
                        console.log("kaam kr rha");
                        setlistOfRestaurants(filteredList);
                        console.log("kaam kr rha");
                    }}
                    >
                    Top Rated Restaurants
                </button>
                
            </div> 
            <div className="res-container">
                {/* <RestaurantCard resData={resList[0]}/> */}
                {filteredRestaurant.map((restaurant)=>{
                    return(
                        <Link
                       key={restaurant?.info?.id}
                       to={"/restaurants/" + restaurant?.info?.id}>
                       <RestaurantCard resData={restaurant}/>
                    </Link> 
                    );
                })}
            </div> 
            {console.log("yhn khtm")}
        </div>
    );
};

export default Body;

{/* <div className="res-container">
                // <RestaurantCard resData={resList[0]}/>
                {filteredRestaurant.map((restaurant)=>
                (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>  */}