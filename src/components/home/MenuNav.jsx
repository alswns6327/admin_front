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
                {menu.childrenMenu
                  ? menu.childrenMenu.map((childMenu) => (
                      <ul key={"parent" + menu.menuId}>
                        <li key={childMenu.menuId}>
                          <Link to={childMenu.menuPath}>
                            {childMenu.menuName}
                          </Link>
                        </li>
                      </ul>
                    ))
                  : []}
              </li>
            ))
          : []}
      </ul>
    </MenuNavBlock>
  );
};

export default MenuNav;
