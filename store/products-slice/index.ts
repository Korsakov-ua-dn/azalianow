import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { productsApi, Product } from "../../api";

// thunk
export const fetchAllProducts = createAsyncThunk<Product[], undefined, { rejectValue: string }>
  ("products/GET_ALL", async (_, { rejectWithValue }) => {
    try {

      const response = await productsApi.getAll();
      return await response.data
      
    } catch (err) {
      return rejectWithValue("Произошла ошибка, пожалуйста попробуйте перезагрузить страницу");
    }
  });

// slice
const initialState: ProductsStateType = {
  data: [],
  total: 20,
  page: 1,
  limit: 9,
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPoducts(state, action) {
      state.data = action.payload.products
      state.total = action.payload.products.length
      state.page = action.payload.page
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setLimit(state, action) {
      state.limit = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const productsActions = productsSlice.actions
export default productsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

// types
type ProductsStateType = {
  data: Product[];
  total: number;
  page: number;
  limit: number;
  loading: boolean;
  error: string | null;
}

