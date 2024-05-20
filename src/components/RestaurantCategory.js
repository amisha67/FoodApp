import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data, showItems, index, setShowIndex})=>{
    console.log("ed",data);

    // uncontrolled comp:jb whi file kr rha ho jb uske parents control kre to controlled hoga
    // const [showItems,setShowItems]=useState(false);
    const handleCLick=()=>{
    //     console.log("clicked");
    //     setShowItems(!showItems);
        setShowIndex(index);
    };
    
    return (
        <div>
            {/* Header */}
             <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                 <div className="flex justify-between cursor-pointer" 
                 onClick={handleCLick}>
                     <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                     <span>⌄</span>
                 </div>
                 {/* Accordian body */} 
                 {showItems && <ItemList items={data.itemCards}/>}
             </div>
             
        </div>
    );
};
export default RestaurantCategory;

