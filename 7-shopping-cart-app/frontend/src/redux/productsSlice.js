import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsApiFetch = createAsyncThunk(
  "products/productsApiFetch",
  async () => {
    const res = await axios.get("http://localhost:5000/products");
    return res?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsApiFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(productsApiFetch.fulfilled, (state, action) => {
        state.fulfilled = "success";
        state.items = action.payload;
      })
      .addCase(productsApiFetch.rejected, (state, action) => {
        state.rejected = "rejected";
      });
  },
});

export default productsSlice.reducer;
