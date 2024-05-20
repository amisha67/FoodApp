import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import React from "react";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{
    beforeAll(()=>{
        console.log("before all");
    })
    test(" should loaded contact us page",()=>{
        // render
        render(<Contact/>);
        // querying
        const heading=screen.getAllByRole("heading");
        // assertion
        expect(heading.length).toBe(2); 
    });
    
    it(" should loaded button on page",()=>{
        render(<Contact/>);
    
        const button=screen.getByText("Submit");
        expect(button).toBeInTheDocument(); 
    });
    
    test(" should loaded input element named name",()=>{
        render(<Contact/>);
    
        const input=screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument(); 
    });
    
    test(" should load 2 input element of Contact component",()=>{
        render(<Contact/>);
    
        const inputBoxes=screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(3); 
    });
})
