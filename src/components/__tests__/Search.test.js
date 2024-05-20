import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mock_searchdata.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search res list for kfc",async ()=>{
    await act(async()=>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );
    const cardsBeforeFilter= screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(21);

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter= screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(4);

}) 
// dikkat aaya tha 

it("should filter top rated rest",async ()=>{
    await act(async()=>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );
    // const cardsBeforefilter= screen.getAllByTestId("resCard");

    // expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});
    // console.log(searchBtn);

    // expect(searchBtn).toBeInTheDocument();
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target:{value:"kfc"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch= screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);

}) 