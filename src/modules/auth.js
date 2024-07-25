import apiClient from "../lib/apiClient";
import * as api from "../lib/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOGIN = "auth/LOGIN";
const GET_ADMIN_LIST = "auth/GET_ADMIN_LIST";

const initialState = {
  adminId: null,
  name: null,
  state: "",
  adminList: null,
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
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
