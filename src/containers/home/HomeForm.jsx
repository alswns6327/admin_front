import styled from "styled-components";
import MenuNav from "../../components/home/MenuNav";
import HomeTemplate from "../../components/home/HomeTemplate";
import { useDispatch } from "react-redux";
import { getMenuListAsync } from "../../modules/menu";

const HomeFormBlock = styled.div``;

const HomeForm = () => {
  const dispatch = useDispatch();

  dispatch(getMenuListAsync());

  return (
    <HomeFormBlock>
      <MenuNav />
      <HomeTemplate />
    </HomeFormBlock>
  );
};

export default HomeForm;
