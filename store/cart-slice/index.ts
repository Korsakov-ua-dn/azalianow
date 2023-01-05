import { createSlice } from "@reduxjs/toolkit";

// slice
const initialState: CartStateType = {
  data: {} as Data,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.data[action.payload.id]
        ? (state.data[action.payload.id] += action.payload.total)
        : (state.data[action.payload.id] = action.payload.total);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

// types
type CartStateType = {
  data: Data;
};

type Data = {
  [key: number]: number;
};
