import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    // const btnName="Logout";
    const [btnNameReact,setbtnNameReact]=useState("Login");

    // if no dependency array, useEffect will be called for each render
    // if empty dep arr, called only once at beginning
    // if something present then everytime when content is updated
    useEffect(()=>{
        console.log("efse")
    },[btnNameReact]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" 
                        onClick={()=>{
                            btnNameReact==="Login"? setbtnNameReact("Logout"):setbtnNameReact("Login")
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;