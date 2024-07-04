import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";

const loginSuccess = createAction(LOGIN_SUCCESS, (admin) => admin);

export const loginAsync = (adminId, password) => async (dispatch) => {
  const admin = await api.login({ adminId, password });
  console.log("--------------");
  console.log(admin);
  console.log(admin.data);
  console.log(admin.body);
  dispatch(loginSuccess(admin.data));
};

const initialState = {
  adminId: null,
  name: null,
};

const admin = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: admin }) => ({
      adminId: admin.adminId,
      password: admin.password,
    }),
  },
  initialState
);

export default admin;
