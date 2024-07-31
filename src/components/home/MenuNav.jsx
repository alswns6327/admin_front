import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const MenuNavBlock = styled.div`
  li,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul ul {
    display: none;
  }
  background-color: ${palette.gray[9]};
  position: fixed;

  width: 150px;
  height: 90vh;
  margin-top: 10vh;

  button {
    position: absolute;
    bottom: 3vh;
  }

  ul > li {
    position: relative;
  }

  ul > li {
    &:hover > ul {
      display: block;
      position: absolute;
      background-color: ${palette.gray[5]};
      top: 0;
      left: 100%;
      width: 100%;
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  color: ${palette.gray[0]};
  font-size: 1.4rem;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;

  &:hover {
    background-color: ${palette.gray[7]};
  }
`;

const MenuNav = ({ onLogout }) => {
  const { menuList } = useSelector(({ menu }) => menu);

  return (
    <MenuNavBlock>
      <ul>
        {menuList
          ? menuList.map((menu) => (
              <li key={menu.id}>
                <StyledLink to={menu.menuPath}>{menu.menuName}</StyledLink>
                {menu.childrenMenu
                  ? menu.childrenMenu.map((childMenu) => (
                      <ul key={"parent" + menu.menuId}>
                        <li key={childMenu.menuId}>
                          <StyledLink to={childMenu.menuPath}>
                            {childMenu.menuName}
                          </StyledLink>
                        </li>
                      </ul>
                    ))
                  : []}
              </li>
            ))
          : []}
      </ul>
      <Button onClick={onLogout}>로그아웃</Button>
    </MenuNavBlock>
  );
};

export default MenuNav;
