import axios from "axios";

export const authService = {
  login: (payload: { username: string; password: string }) => {
    return axios.post("https://dummyjson.com/auth/login", payload);
  },
};
