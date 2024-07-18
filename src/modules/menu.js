import * as api from "../lib/menu";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_MENU_LIST = "menu/GET_MENU_LIST";

const initialState = {
  menuList: null,
  state: "",
};

export const asyncGetMenuList = createAsyncThunk(GET_MENU_LIST, async () => {
  const response = await api.getMenuList();
  return response.data;
});

const menuSlice = createSlice({
  name: "muneSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetMenuList.pending, (state, action) => {
      state.state = "조회중";
    });
    builder.addCase(
      asyncGetMenuList.fulfilled,
      (state, { payload: newMenuList }) => {
        state.state = "";
        state.menuList = newMenuList;
      }
    );
    builder.addCase(asyncGetMenuList.rejected, (state, action) => {
      state.state = "에러 발생";
    });
  },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;
