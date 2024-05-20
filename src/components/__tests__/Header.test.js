import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import appStore from "../../utils/appStore"
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a click login button changes to logout",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    // quarying
    // need extra specification for finding one in multiples button 
    const loginButton= screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton)
    const logoutButton= screen.getByRole("button",{name:"Logout"});
    
    // assertion
    expect(logoutButton).toBeInTheDocument();
})