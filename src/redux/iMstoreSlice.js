import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const iMstoreSlice = createSlice({
  name: "iMstore",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { addToCart } = iMstoreSlice.actions;
export default iMstoreSlice.reducer;
