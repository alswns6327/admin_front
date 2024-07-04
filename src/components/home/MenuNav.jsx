import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuNavBlock = styled.div``;

const MenuNav = () => {
  return (
    <MenuNavBlock>
      <ul>
        <li>
          <Link to="account">계정 관리</Link>
        </li>
        <li>
          <Link to="code">코드 관리</Link>
        </li>
        <li>
          <Link to="menu">메뉴 관리</Link>
        </li>
      </ul>
    </MenuNavBlock>
  );
};

export default MenuNav;
