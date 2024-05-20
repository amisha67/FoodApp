import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import {useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () =>{
    // state variable
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    // console.log("kb");
    // console.log("body rendered", listOfRestaurants);

    const fetchData= async ()=>{
        console.log("?")
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

    const onlineStatus=useOnlineStatus();
    
    if(onlineStatus===false)
    return( <h1>Looks like you're offline .Refresh the page</h1> )
    
    const {loggedInUser, setUserName}=useContext(UserContext);

    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body" >
            <div data-testid="resCard" className="filter flex justify-between">
                <div className="search-cont m-4 p-4">
                    <input data-testid="searchInput" className="border border-solid border-black" type="text" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button 
                     className="m-4 bg-green-300 px-4 py-2 items-center rounded-lg"
                     onClick={()=>{
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
                <div className="m-4 p-8 flex items-center">
                <button 
                    className="px-4  bg-gray-200 rounded-lgs "
                    onClick={() => {
                        console.log("kaam kr rha");
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        ); 
                        console.log("kaam kr rha");
                        setFilteredRestaurants(filteredList);
                        console.log("kaam kr rha");
                    }}
                    >
                    Top Rated Restaurants
                </button>
                </div>
                <div className="m-4 p-8 flex items-center">
                    <label>Username : </label>
                    <input className="border border-black px-2" 
                     value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </div> 
            
            <div className="flex flex-wrap justify-center">
                {/* <RestaurantCard resData={resList[0]}/> */}
                {filteredRestaurant.map((restaurant)=>(
                    
                    <Link
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant?.info?.id}>
                        {/* if res are promoted then add logic for it */}
                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData={restaurant}/>
                        ) : (
                            <RestaurantCard resData={restaurant}/>
                        )}
                        {/* nhi aaya promoted data */}
                    </Link> 
                    
                ))}
            </div> 
            {console.log("yhn khtm")}
        </div>
    );
};

export default Body;

// {/* <div className="res-container">
//                 // <RestaurantCard resData={resList[0]}/>
//           {filteredRestaurant.map((restaurant)=>
//           (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//           ))}
//     </div>


// {restaurant.data.promoted ? (
//     <RestaurantCardPromoted resData={restaurant}/>
// ) : (
//     <RestaurantCard resData={restaurant}/>
// )}