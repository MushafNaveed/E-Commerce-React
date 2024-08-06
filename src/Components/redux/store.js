// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./AddCounter/counter";
import itemsReducer from "./Items/items";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
  },
});
