import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    // reducers: [
    //     {
    //         type: 'cart/addItem',
    //         payload: (item) => item,
    //     },
    //     {
    //         type: 'cart/removeItem',
    //         payload: (item) => item,
    //     },
    //     {
    //         type: 'cart/clearCart',
    //         payload: () => [],
    //     },
    // ],
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state, action) => {
            state.items = []
        }
    }
})

// cartSlice = {
//     name: 'cart',
//     actions: { addItem, removeItem, clearCart }
// }


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer