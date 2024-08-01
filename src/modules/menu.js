import * as api from "../lib/api/menu";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_MENU_LIST = "menu/GET_MENU_LIST";
const SAVE_MENU = "menu/SAVE_MENU";
const REMOVE_MENU = "menu/REMOVE_MENU";

const initialState = {
  menuList: [],
  state: "",
};

export const asyncGetMenuList = createAsyncThunk(GET_MENU_LIST, async () => {
  const response = await api.getMenuList();
  return response.data;
});

export const asyncSaveTheMenu = createAsyncThunk(SAVE_MENU, async (menu) => {
  const response = await api.saveMenu(menu);
  return response.data;
});

export const asyncRemoveTheMenu = createAsyncThunk(
  REMOVE_MENU,
  async (menuId) => {
    const response = await api.removeMenu(menuId);
    return response.data;
  }
);

const menuSlice = createSlice({
  name: "muneSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetMenuList.pending, (state, action) => {
      state.state = "조회중";
    });
    builder.addCase(asyncGetMenuList.fulfilled, (state, { payload }) => {
      if (payload === "login") return;
      state.state = "";
      state.menuList = payload;
    });
    builder.addCase(asyncGetMenuList.rejected, (state, action) => {
      state.state = "에러 발생";
    });
    builder.addCase(asyncSaveTheMenu.pending, (state, action) => {
      state.state = "저장중";
    });
    builder.addCase(asyncSaveTheMenu.fulfilled, (state, { payload }) => {
      if (payload === "login") return;
      state.state = "";
      state.menuList = payload;
    });
    builder.addCase(asyncSaveTheMenu.rejected, (state, action) => {
      state.state = "저장 실패";
    });
    builder.addCase(asyncRemoveTheMenu.pending, (state, action) => {
      state.state = "삭제중";
    });
    builder.addCase(asyncRemoveTheMenu.fulfilled, (state, { payload }) => {
      if (payload === "login") return;
      state.state = "";
      state.menuList = payload;
    });
    builder.addCase(asyncRemoveTheMenu.rejected, (state, action) => {
      state.state = "삭제 실패";
    });
  },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;
