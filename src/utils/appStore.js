import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

// ye reducer appstore ka reducer h jo combinely cartslice k saare reducer ko configure krega
// chota reducer apne slice ko modify krr rha lekin obj ko modify krne k liye bhi to kuch chahiye
 // isme slice create krege lekin ye appStore h kya?