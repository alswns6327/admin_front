import MenuNav from "../../components/home/MenuNav";
import HomeTemplate from "../../components/home/HomeTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { asyncGetMenuList } from "../../modules/menu";
import { logout } from "../../modules/auth";
import apiRequest from "../../lib/api/apiRequest";
import Logo from "../../components/common/Logo";
import styled from "styled-components";
import Header from "../../components/common/Header";

const HomeStyle = styled.div``;

const HomeContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const auth = useSelector(({ auth }) => auth);

  apiRequest(asyncGetMenuList, {}, dispatch, navigator);

  useEffect(
    function checkAuth() {
      if (!auth.adminId) navigator("/login");
    },
    [auth, dispatch, navigator]
  );

  const onLogout = async () => {
    await apiRequest(logout, {}, dispatch, navigator);
  };

  return (
    <HomeStyle>
      <Header />
      <Logo />
      <MenuNav onLogout={onLogout} />
      <HomeTemplate />
    </HomeStyle>
  );
};

export default HomeContainer;
