import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";

const loginSuccess = createAction(LOGIN_SUCCESS, (admin) => admin);

export const loginAsync = (adminId, password) => async (dispatch) => {
  const response = await api.login({ adminId, password });
  localStorage.setItem("accessToken", response.data.accessToken);
  dispatch(loginSuccess(response.data));
};

const initialState = {
  adminId: null,
  name: null,
};

const admin = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: admin }) => ({
      adminId: admin.adminId,
      name: admin.name,
    }),
  },
  initialState
);

export default admin;
