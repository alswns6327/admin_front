import apiClient from "../lib/apiClient";
import * as api from "../lib/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";

const initialState = {
  adminId: null,
  name: null,
  state: "",
  adminList: [],
};

export const asyncLogin = createAsyncThunk(
  LOGIN,
  async ({ adminId, password }) => {
    const response = await api.login({ adminId, password });
    localStorage.setItem("accessToken", response.data.accessToken);
    apiClient.defaults.headers.Authorization = "Bearer ".concat(
      response.data.accessToken
    );
    return response.data;
  }
);

export const logout = createAsyncThunk(LOGOUT, async () => {
  const response = await api.logout();
  if (response.status === 200) {
    localStorage.setItem("accessToken", "");
    apiClient.defaults.headers.Authorization = "";
  }
  return 1;
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncLogin.pending, (state, action) => {
      state.state = "로그인중";
    });
    builder.addCase(asyncLogin.fulfilled, (state, { payload: admin }) => {
      state.adminId = admin.adminId;
      state.name = admin.name;
      state.state = "";
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.state = "로그인 실패";
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.adminId = null;
      state.name = null;
      state.state = "";
      state.adminList = [];
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
