import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderService } from "../../api/services";


export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async (params = {}, { rejectWithValue }) => {
        try{
            const response = await OrderService.getAll(params);
            return response.data;
        }catch(err){
            return rejectWithValue({
                message: err.message
            })
        }
    }
    );