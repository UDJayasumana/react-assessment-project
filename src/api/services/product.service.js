import axiosClient from '../client/axiosClient';
import { PRODUCT_ENDPOINTS } from '../endpoints';


export const ProductService = {
    getAll: (params = {}) => axiosClient.get(PRODUCT_ENDPOINTS.LIST, { params }),
    getById: (id) => axiosClient.get(PRODUCT_ENDPOINTS.DETAILS(id)),
    updateById: (id, data) => axiosClient.put(PRODUCT_ENDPOINTS.UPDATE(id), data),
    patchById: (id, data) => axiosClient.patch(PRODUCT_ENDPOINTS.PATCH(id), data),
}