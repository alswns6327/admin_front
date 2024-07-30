import MenuNav from "../../components/home/MenuNav";
import HomeTemplate from "../../components/home/HomeTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { asyncGetMenuList } from "../../modules/menu";
import apiRequest from "../../hooks/common/apiRequest";
import { getMenuList } from "../../lib/menu";
import { logout } from "../../modules/auth";

const HomeForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const auth = useSelector(({ auth }) => auth);

  apiRequest(asyncGetMenuList, {}, dispatch, navigator);

  useEffect(
    function checkAuth() {
      if (!auth.adminId) navigator("login");
    },
    [auth, dispatch, navigator]
  );

  const onLogout = async () => {
    await apiRequest(logout, {}, dispatch, navigator);
  };

  return (
    <>
      <MenuNav onLogout={onLogout} />
      <HomeTemplate />
    </>
  );
};

export default HomeForm;
