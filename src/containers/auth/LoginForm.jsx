import React, { useEffect, useState } from "react";
import LoginTemplate from "../../components/auth/LoginTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogin } from "../../modules/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const auth = useSelector(({ auth }) => auth);

  const [loginForm, setLoginForm] = useState({ adminId: "", password: "" });
  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  const onClick = () => {
    dispatch(asyncLogin(loginForm));
  };

  useEffect(() => {
    if (auth.adminId) navigator("/");
  }, [auth, navigator]);

  return <LoginTemplate onChange={onChange} onClick={onClick} />;
};

export default LoginForm;
