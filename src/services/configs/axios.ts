import axios, { AxiosError, AxiosResponse } from "axios";
import { getCookie } from "../../utils/cookies";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.authorization = "Bearer " + token;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    return res;
  },
  async (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
