import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    // const btnName="Logout";
    const [btnNameReact,setbtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus;

    // if no dependency array, useEffect will be called for each render
    // if empty dep arr, called only once at beginning
    // if something present then everytime when content is updated
    useEffect(()=>{
        // console.log("efse")
    },[btnNameReact]);

    const {loggedInUser} = useContext(UserContext);
    // console.log("User: ",loggedInUser);

    // selector is nothing but hooks inside react
    const cartItems =useSelector((store)=>store.cart.items);

    return (
        <div className="flex justify-between shadow-lg bg-blue-100 md:bg-green-100 sm:bg-yellow-100" >
            <div className="logo-container ">
                <img className="w-56 m-8" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status:{onlineStatus? "🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                     </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart"> Cart-{cartItems.length}</Link>
                    </li>
                    <button className="login" 
                        onClick={()=>{
                            btnNameReact==="Login"? setbtnNameReact("Logout"):setbtnNameReact("Login")
                        }}>
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;