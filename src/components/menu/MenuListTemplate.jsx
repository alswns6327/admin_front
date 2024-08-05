import styled from "styled-components";
import Table from "../common/Table";
import { useRef } from "react";

const MenuListTemplateBlock = styled.div``;

const MenuListTemplate = ({
  temporaryMenuList,
  onRemoveMenu,
  handleParentMenuClick,
  temporaryChildrenMenuList,
  selectedParentMenuId,
}) => {
  const list = temporaryMenuList.map((menu) => ({
    key: menu.id,
    items: [menu.menuName, menu.menuPath],
  }));
  const childrenList = temporaryChildrenMenuList.map((childMenu) => ({
    key: childMenu.id,
    items: [childMenu.menuName, childMenu.menuPath],
  }));
  return (
    <MenuListTemplateBlock>
      <Table
        list={list}
        listItemClick={handleParentMenuClick}
        handleRemoveItem={onRemoveMenu}
        headerList={["메뉴명", "메뉴 경로", "수정", "삭제"]}
        headerTitle={"상단 메뉴"}
      />
      <br />
      <br />
      <Table
        list={childrenList}
        handleRemoveItem={onRemoveMenu}
        headerList={["메뉴명", "메뉴 경로", "수정", "삭제"]}
        headerTitle={"하위 메뉴"}
      />
    </MenuListTemplateBlock>
  );
};

export default MenuListTemplate;
