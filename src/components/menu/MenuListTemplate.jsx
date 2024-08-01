import styled from "styled-components";

const MenuListTemplateBlock = styled.div``;

const MenuListTemplate = ({
  temporaryMenuList,
  onRemoveMenu,
  handleParentMenuClick,
  temporaryChildrenMenuList,
  selectedParentMenuId,
}) => {
  return (
    <MenuListTemplateBlock>
      {temporaryMenuList.map((menu) => (
        <div
          key={menu.id}
          onClick={() => {
            handleParentMenuClick(menu.id);
          }}
        >
          {menu.menuName}, ({menu.menuPath})
          <button onClick={() => onRemoveMenu(menu.id)}>삭제</button>
        </div>
      ))}
      {temporaryChildrenMenuList.map((childrenMenu) => (
        <div key={childrenMenu.id}>
          {childrenMenu.menuName}, ({childrenMenu.menuPath})
        </div>
      ))}
    </MenuListTemplateBlock>
  );
};

export default MenuListTemplate;
