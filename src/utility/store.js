import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice.js'

// Create a Redux store instance with the defined reducers.

const store = configureStore({
    reducer: {
        // Define your reducers here
        cart: cartSlice // cart = name of cartSlice
        // Add your other slices here
    }
})

export default store;