import axios from "axios";
import { ENV } from '../../config/env';
import { showToast } from "../../utils/toast";


const axiosClient = axios.create({
    baseURL: ENV.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
      },
});


axiosClient.interceptors.response.use(

  (response) => {

    const method = response.config.method?.toLowerCase();
    const data = response.data;

    // Only show success for write operations
    if (["post", "put", "patch", "delete"].includes(method)) {
      const successMessage =
        data?.message || data?.successMessage || "Action completed successfully";

      showToast(successMessage, "success");
    }

    return response;
  },
  (error) => {
     // default global error
     let errorMessage = 'Something went wrong!';
     let messageType = 'error';

     // Network error (no internet/server down)
     if (!error.response) {
      errorMessage = 'Network error. Please check your connection.';
    }
    else if(error.response){
      const status = error.response.status;
      const data = error.response.data;

      // Handle common HTTP status codes
      if(status === 400)
        errorMessage = `Error: ${error.response.data.error ? error.response.data.error : 'Bad request.'}`;
      if(status === 401)
        errorMessage = 'Session expired. Please login again.';
      else if(status === 403)
        errorMessage = 'You do not have permission for this action.';
      else if(status === 404)
        errorMessage = `Error: ${error.response.data.error ? error.response.data.error : 'Requested resource not found.'}`;
      else if(status === 422 && data.errors)
      {
        const firstError = Object.values(data.errors)[0];
              errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
      }
      else if(status === 429)
        errorMessage = 'Too many requests. Please wait a moment.';
      else if(status > 500)
            errorMessage = 'Server error. Please try again later.';
      else if (data && data.message) {
        // Use server-provided message if available
        errorMessage = data.message;
      }

    }
    // Request setup error
    else if (error.message) {
      errorMessage = error.message;
    }

    showToast(errorMessage,messageType);

    // Return the error so individual requests can still handle it if needed
    return Promise.reject(error);
  }

)


export default axiosClient;