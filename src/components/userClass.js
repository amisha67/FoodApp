import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        // constructor bht strong h jb bhi class cll hoga iska instance cll hoga constructor jaega aur create krega sb
        this.state={
            // statevar:1,
            // statevar2:2

            userInfo:{
                name:"dummy",
                location:"khi bhi",
                
            },
        };
        // console.log(this.props.name+ "child constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name+ "child didmount");
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    render(){
        // const {name, location,contact}=this.props;
        // const{statevar,statevar2}=this.state;
        // console.log(this.props.name+ "child render");

        const {name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h3>state var:{statevar}</h3>
                <button 
                  onClick={()=>{
                    this.setState({
                        statevar:this.state.statevar+5
                    })
                }}>
                    inc up
                </button> 
                <h3>state var2:{statevar2}</h3>  */}

                <img src= {avatar_url}/>
                <h2>name: {name}</h2>
                <h3>location: {location}</h3>
                {/* photo h hi nhi,na location */}
                <h3>contact:amishabarnwal3 </h3>
            </div>
        );
    }
}

export default UserClass;