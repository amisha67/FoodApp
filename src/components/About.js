import User from "./user";
import UserClass from "./userClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("parent didmount");
    }
    
    render(){
        console.log("parent render");
        return(
            <div>
                <h1>This is about me</h1>
                <div>
                    LoggedIn User : 
                    <UserContext.Consumer>
                        {({loggedInUser})=>
                        (<h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>who learned this from akshay saini</h2>
                {/* <UserClass/> */}
                <UserClass name={"Amisha Raj(class)"} location={"Pahado m"}/>
                {/* <UserClass name={"Amisha Raj(class2)"} location={"Pahado m"}/>
                <UserClass name={"Amisha Raj(class3)"} location={"Pahado m"}/> */}
            </div>
        )
    }
}

// const About = () =>{
//     return (
//         <div>
//             <h1>This is about me</h1>
//             <h2>who learned this from akshay saini</h2>
//             {/* <User name={"Amisha Raj (fnc)"}/> */}
//             <UserClass name={"Amisha Raj(class)"} location={"Pahado m"}/>
//         </div>
//     )
// };
export default About; 