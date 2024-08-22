import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const apiRequest = async (func, param, dispatch, navigator) => {
  if (dispatch) {
    const response = await dispatch(func(param));
    if (response.payload === "login") navigator("/login");
  } else {
    const response = await func(param);
    if (response.data === "login") navigator("/login");
    return response;
  }
};

export default apiRequest;
