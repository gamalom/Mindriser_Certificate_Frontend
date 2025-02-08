import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.SUCCESS,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  const data = response.data.data;
  return data;
});
