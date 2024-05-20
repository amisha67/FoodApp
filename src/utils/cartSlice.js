import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    // takes a config to create a slice
    name:'cart', 
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            // directly  modifying the state,or mutate
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // RTX says either mutate the existing state or return new state
            state.items.length=0;
            // return {items:[]}; it will empty the original array
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;