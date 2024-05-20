import { useState } from "react";

const User =()=>{
    const [statevar]=useState(0);
    // in updating we use setstatevar and update acc
    const [statevar2]=useState(0);
    return (
        <div className="user-card">
            <h3>State variable:{statevar}</h3>
            <h3>State variable2:{statevar2}</h3>
            <h2>name: Amisha</h2>
            <h3>location: Delhi</h3>
            <h3>Contact: @amishabarnwal3</h3>
        </div>
    );
};

export default User;