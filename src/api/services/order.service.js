import axiosClient from '../client/axiosClient';
import { ORDER_ENDPOINTS } from '../endpoints';


export const OrderService = {
    getAll: (params = {}) => axiosClient.get(ORDER_ENDPOINTS.LIST, { params })
}