import { createSlice } from "@reduxjs/toolkit";
import { eraseCookie, getCookie } from "../utils/cookies";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLogin: !!getCookie("accessToken"),
    userInfo: !!getCookie("userInfo")
      ? JSON.parse(getCookie("userInfo") || "{}")
      : null,
    openRequestAdvise: false,
    openLogin: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      eraseCookie("accessToken");
      eraseCookie("userInfo");
    },
    setRequestAdvise: (state, action) => {
      state.openRequestAdvise = action.payload;
    },
    setOpenLogin: (state, action) => {
      state.openLogin = action.payload;
    },
  },
});

export const { setLogin, setLogout, setRequestAdvise, setOpenLogin } = appSlice.actions;
export default appSlice.reducer;
