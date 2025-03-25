import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductData } from '../../services/product';

const initialState = {
  basket: [],
  products: [],
  loading: false,
  error: null,
};

export const getProductDataAction = createAsyncThunk(
  'product/getProductData',
  getProductData
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      const newValue = action.payload * 20;
      const list = [newValue, ...state.basket];
      state.basket = list;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDataAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDataAction.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductDataAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setProducts,
  setLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer;
