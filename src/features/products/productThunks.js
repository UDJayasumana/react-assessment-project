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

    export const fetchProductById = createAsyncThunk(
        'products/fetchProductById',
        async (id, { rejectWithValue }) => {
            try{
                const response = await ProductService.getById(id);
                return response.data;
            }catch(err){
                return rejectWithValue({
                    message: err.message,
                    id: id // Include the ID in error for reference
                })
            }
        }
    );

    export const updateProductById = createAsyncThunk(
        'products/updateProductById',
        async ({ id, ...data }, { rejectWithValue }) => {
            try{
                const response = await ProductService.updateById(id, data);
                return response.data;
            }catch(err){
                return rejectWithValue({
                    message: err.message,
                    id: id // Include the ID in error for reference
                })
            }
        }
    );

    export const patchProductById = createAsyncThunk(
        'products/patchProductById',
        async ({ id, ...data }, { rejectWithValue }) => {
            try{
                const response = await ProductService.patchById(id, data);
                return response.data;
            }catch(err){
                return rejectWithValue({
                    message: err.message,
                    id: id // Include the ID in error for reference
                })
            }
        }
    );
