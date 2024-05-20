import MOCK_DATA from "../mocks/mockdata.json";
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";


it("Should render Restaurant card component with props data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const Name = screen.getAllByRole("heading",{Name: "Pizza Hut"});
    expect(Name[0]).toBeInTheDocument();
});

// nhi hua ye
