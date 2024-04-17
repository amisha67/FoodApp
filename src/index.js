import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

// header
//  -logo
//  -nav items
// body
//  -search 
//  -restaurant
//    -img,name,cost,detail,rate
// footer
//  - links
//  -details

const Applayout =()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resID",
                element:<RestaurantMenu/>,
            },
        ],
        errorElement:<Error/>,
    }
])
const rot=ReactDOM.createRoot(document.getElementById("root"));
// rot.render(<Applayout/>);
rot.render(<RouterProvider router={appRouter}/>);