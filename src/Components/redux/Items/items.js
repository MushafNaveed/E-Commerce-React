// redux/Items/items.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const items= createSlice({
  name: "items",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    IncrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },

    DecrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    RemoveItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(i => i.id !== itemId);
    }
  }
});

export const { AddItem, IncrementQuantity, DecrementQuantity, RemoveItem } = items.actions;
export default items.reducer;
