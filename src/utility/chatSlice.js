import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_COUNT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
    if(state.messages.length === LIVECHAT_COUNT){
        state.messages.shift(); // remove the oldest message if the chat history is full 
    }
    
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
