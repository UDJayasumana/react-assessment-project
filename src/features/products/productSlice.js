import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "./productThunks";

const productSlice = createSlice({
    name: "products",
    initialState: {
       //#region product list
        list: {},
        listLoading: false,
        listError: null,
       //#endregion

        //#region selected product
        selectedProduct: {},
        selectedProductLoading: false,
        selectedProductError: null,
        //#endregion

    },
    extraReducers:(builder) =>{
        builder
        //#region Fetch all products
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
        //#endregion

        //#region Fetch single product by ID
        .addCase(fetchProductById.pending, (state) => {
            state.selectedProductLoading = true;
            state.selectedProductError = null;
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
            state.selectedProductLoading = false;
            state.selectedProduct = action.payload;
        })
        .addCase(fetchProductById.rejected, (state, action) => {
            state.selectedProductLoading = false;
            state.selectedProductError = action.payload;
        })
        //#endregion
    }

})
export default productSlice.reducer;