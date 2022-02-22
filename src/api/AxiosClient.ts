import axios from "axios";

/**
 * @description Create a axios instance
 */
export const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});
