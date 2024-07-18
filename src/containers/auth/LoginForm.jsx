import React, { useEffect, useState } from "react";
import LoginTemplate from "../../components/auth/LoginTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogin } from "../../modules/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const auth = useSelector(({ auth }) => auth);

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "adminId") setAdminId(value);
    if (name === "password") setPassword(value);
  };
  const onClick = () => {
    dispatch(asyncLogin({ adminId, password }));
  };

  useEffect(() => {
    if (auth.adminId) navigator("/");
  }, [auth, navigator]);

  return <LoginTemplate onChange={onChange} onClick={onClick} />;
};

export default LoginForm;
