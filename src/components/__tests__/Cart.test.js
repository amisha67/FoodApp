import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mock_menu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve(()=>{
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("shouldload menu comp", async()=>{
    await act(async()=>render(
        <Provider store={appStore}>
        <BrowserRouter>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </BrowserRouter>
            
        </Provider>
    
    ));

    const accHeader= screen.getByText("Recommended(20)");

    fireEvent.click(accHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    const addBtn=screen.getAllByRole("button",{name:"+Add"});
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart-1")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(7);
    fireEvent.click(screen.getByRole("button",{name:"Clear"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    expect(screen.getByText("Your cart is empty, Add something"));
    
})