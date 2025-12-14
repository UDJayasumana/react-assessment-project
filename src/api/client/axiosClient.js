import axios from "axios";
import { ENV } from '../../config/env';

const axiosClient = axios.create({
    baseURL: ENV.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
      },
});

export default axiosClient;