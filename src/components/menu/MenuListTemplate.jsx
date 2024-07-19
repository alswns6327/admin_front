import styled from "styled-components";

const MenuListTemplateBlock = styled.div``;

const MenuListTemplate = ({ menuList, onRemoveMenu }) => {
  return (
    <MenuListTemplateBlock>
      {menuList.map((menu) => (
        <div key={menu.id}>
          {menu.menuName} <button>추가</button>{" "}
          <button onClick={() => onRemoveMenu(menu.id)}>삭제</button>
        </div>
      ))}
    </MenuListTemplateBlock>
  );
};

export default MenuListTemplate;
