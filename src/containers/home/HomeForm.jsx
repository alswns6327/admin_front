import styled from "styled-components";
import MenuNav from "../../components/home/MenuNav";
import HomeTemplate from "../../components/home/HomeTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { asyncGetMenuList } from "../../modules/menu";

const HomeFormBlock = styled.div``;

const HomeForm = () => {
  const dispatch = useDispatch();
  const navigater = useNavigate();
  const auth = useSelector(({ auth }) => auth);
  console.log(auth);
  useEffect(
    function checkAuth() {
      if (!auth.adminId) {
        navigater("login");
      } else {
        dispatch(asyncGetMenuList());
      }
    },
    [auth, dispatch, navigater]
  );

  return (
    <HomeFormBlock>
      <MenuNav />
      <HomeTemplate />
    </HomeFormBlock>
  );
};

export default HomeForm;
