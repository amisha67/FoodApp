import React,{Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appstore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Grocery from "./components/grocery";


// dist m ek hi .js file dikhega jiska mtlb h app ko bundle kr diya gya to issliye pura bundle to nhi kre lekin 
// chote bundle krte h jisko bolte h chunking, lazy loading, dynamic bundling, code splitting

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

const Grocery=lazy(() => import("./components/grocery"));

const Applayout =()=>{

    const [userName,setUserName]=useState();
    // some authentiaction code
    useEffect(()=>{
        // make an api call and receive username and pw
        const data={
            name:"Amisha Raj"
        };
        setUserName(data.name);
    });//to pass these context or info to an app is knwn as context provider

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
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
                path:"/grocery",
                element:<Suspense fallback={<h1>wait</h1>}  ><Grocery/></Suspense>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/restaurants/:resID",
                element:<RestaurantMenu/>,
            },
        ],
        errorElement:<Error/>,
    }
])
const rot=ReactDOM.createRoot(document.getElementById("root"));
// rot.render(<Applayout/>);
rot.render(<RouterProvider router={appRouter}/>);