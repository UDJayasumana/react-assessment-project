import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts,
  fetchProductById,
  updateProductById,
  patchProductById,
} from "./productThunks";

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

    //#region updated product
    updatedProduct: {},
    updatedProductLoading: false,
    updatedProductError: null,
    //#endregion

    //#region patched product
    patchedProduct: {},
    patchedProductLoading: false,
    patchedProductError: null,
    //#endregion
  },
  reducers: {
    // Reset updated product
    resetUpdatedProduct: (state) => {
      state.updatedProduct = {};
      state.updatedProductLoading = false;
      state.updatedProductError = null;
    },
    // Reset patched product
    resetPatchedProduct: (state) => {
      state.patchedProduct = {};
      state.patchedProductLoading = false;
      state.patchedProductError = null;
    },
  },
  extraReducers: (builder) => {
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

      //#region Update single product by ID
      .addCase(updateProductById.pending, (state) => {
        state.updatedProductLoading = true;
        state.updatedProductError = null;
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        state.updatedProductLoading = false;
        state.updatedProduct = action.payload;
      })
      .addCase(updateProductById.rejected, (state, action) => {
        state.updatedProductLoading = false;
        state.updatedProductError = action.payload;
      })
      //#endregion

      //#region Patched single product by ID
      .addCase(patchProductById.pending, (state) => {
        state.patchedProductLoading = true;
        state.patchedProductError = null;
      })
      .addCase(patchProductById.fulfilled, (state, action) => {
        state.patchedProductLoading = false;
        state.patchedProduct = action.payload;
      })
      .addCase(patchProductById.rejected, (state, action) => {
        state.patchedProductLoading = false;
        state.patchedProductError = action.payload;
      });
    //#endregion
  },
});

export const { resetUpdatedProduct, resetPatchedProduct } = productSlice.actions;
export default productSlice.reducer;
