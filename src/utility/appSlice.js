import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true 
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        toggleClose: (state) => {
            state.isMenuOpen = false;
        }
    }
})

// state.isMenuOpen = not of state.isMenuOpen
// means if state.isMenuOpen will be true then after click on 

export const { toggleMenu,toggleClose } = appSlice.actions;
export default appSlice.reducer;

