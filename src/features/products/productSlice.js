import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks";

const productSlice = createSlice({
    name: "products",
    initialState: {
        //product list
        list: {},
        listLoading: false,
        listError: null,

    },
    extraReducers:(builder) =>{
        builder
        // Fetch all products
        .addCase(fetchProducts.pending, (state) => {
            state.listLoading = true;
            state.listError = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.listLoading = false;
            state.list = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.listLoading = false;
            state.listError = action.payload;
        })
    }

})
export default productSlice.reducer;