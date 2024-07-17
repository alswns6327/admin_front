import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/menu";

const GET_MENU_LIST = "menu/GET_MENU_LIST";

const getMenuList = createAction(GET_MENU_LIST, (menuList) => menuList);

export const getMenuListAsync = () => async (dispatch) => {
  const response = await api.getMenuList();
  dispatch(getMenuList(response.data));
};

const initialState = {
  menuList: null,
};

const menu = handleActions(
  {
    [GET_MENU_LIST]: (state, { payload: newMenuList }) => ({
      menuList: newMenuList,
    }),
  },
  initialState
);

export default menu;
