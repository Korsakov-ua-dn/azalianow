import { createSlice } from "@reduxjs/toolkit";

// slice
const initialState: FavoritesStateType = {
  data: [] as number[],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.data.includes(action.payload)
        ? state.data = state.data.filter(id => id !== action.payload)
        : state.data.push(action.payload)
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;

// types
type FavoritesStateType = {
  data: number[];
};
