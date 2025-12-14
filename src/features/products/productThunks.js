import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from '../../api/services';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params = {}, { rejectWithValue }) => {
        try{
            const response = await ProductService.getAll(params);
            return response.data;
        }catch(err){
            return rejectWithValue({
                message: err.message
            })
        }
    }
    );