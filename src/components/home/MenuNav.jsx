import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuNavBlock = styled.div``;

const MenuNav = () => {
  const { menuList } = useSelector(({ menu }) => menu);

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
      </ul>
    </MenuNavBlock>
  );
};

export default MenuNav;
