import styled from "styled-components";

const MenuListTemplateBlock = styled.div``;

const MenuListTemplate = ({ temporaryMenuList, onRemoveMenu }) => {
  return (
    <MenuListTemplateBlock>
      {temporaryMenuList.map((menu) => (
        <div key={menu.id}>
          {menu.menuName} <button>추가</button>{" "}
          <button onClick={() => onRemoveMenu(menu.id)}>삭제</button>
          {menu.childrenMenu
            ? menu.childrenMenu.map((childMenu) => (
                <div key={childMenu.id}> - {childMenu.menuName}</div>
              ))
            : []}
        </div>
      ))}
    </MenuListTemplateBlock>
  );
};

export default MenuListTemplate;
