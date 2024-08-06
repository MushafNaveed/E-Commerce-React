import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count: 0,
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.count +=1;
        },
    }
})


export const {increment}=counter.actions;
export default counter.reducer;