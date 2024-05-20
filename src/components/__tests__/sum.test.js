import {sum} from "../sum";

test("Sum of the function will be calculated sum of two num: ",()=>{
    const result=sum(3,4);

    // this is assertion when we expext something to be ike a particular val
    expect(result).toBe(7);
});

// it basically takes two arg: string and function