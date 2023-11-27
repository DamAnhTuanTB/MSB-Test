import { APIs } from "./configs/api";
import axiosInstance from "./configs/axios";

export const productService = {
  getListProducts: () => {
    return axiosInstance.get(APIs.GET_LIST_PRODUCTS);
  },
};
