import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "kunle",
    allStudent: [],
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
