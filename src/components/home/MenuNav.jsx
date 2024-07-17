import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuNavBlock = styled.div``;

const MenuNav = () => {
  const { menuList } = useSelector(({ menu }) => menu);
  console.log("git 커밋 잔디 테스트");
  return (
    <MenuNavBlock>
      <ul>
        {menuList
          ? menuList.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.menuPath}>{menu.menuName}</Link>
              </li>
            ))
          : []}
        <li>
          <Link to="/account">계정 관리</Link>
        </li>
        <li>
          <Link to="/code">코드 관리</Link>
        </li>
        <li>
          <Link to="/menu">메뉴 관리</Link>
        </li>
      </ul>
    </MenuNavBlock>
  );
};

export default MenuNav;
