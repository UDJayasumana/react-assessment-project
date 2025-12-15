import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./orderThunks";


const orderSlice = createSlice({
    name: "orders",
    initialState: {
       //#region order list
        list: {},
        listLoading: false,
        listError: null,
       //#endregion

  

    },
    extraReducers:(builder) =>{
        builder
        //#region Fetch all orders
        .addCase(fetchOrders.pending, (state) => {
            state.listLoading = true;
            state.listError = null;
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
            state.listLoading = false;
            state.list = action.payload;
        })
        .addCase(fetchOrders.rejected, (state, action) => {
            state.listLoading = false;
            state.listError = action.payload;
        })
        //#endregion

    
    }

})
export default orderSlice.reducer;