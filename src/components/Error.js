import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err= useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>Oops!!!</h1>
            <h2>You did something wrong!!</h2>
            <h3>{err.status}: {err.error.message}</h3>
        </div>
    )
}
export default Error;