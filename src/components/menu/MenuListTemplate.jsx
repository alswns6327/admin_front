import styled from "styled-components";
import Table from "../common/Table";
import { useEffect, useState } from "react";

const MenuListTemplateBlock = styled.div``;

const MenuListTemplate = ({
  temporaryMenuList,
  onRemoveMenu,
  handleParentMenuClick,
  temporaryChildrenMenuList,
  handleSaveMenu,
  handleParentMenuAdd,
  handleChildMenuAdd,
  handleParentToggleInput,
  handleChildToggleInput,
}) => {
  const lists = temporaryMenuList.map((menu) => ({
    key: menu.id,
    parentMenuId: menu.parentMenuId,
    items: [
      { name: "menuName", value: menu.menuName },
      { name: "menuPath", value: menu.menuPath },
    ],
    input: menu.input,
  }));

  const childrenLists = temporaryChildrenMenuList.map((childMenu) => ({
    key: childMenu.id,
    parentMenuId: childMenu.parentMenuId,
    items: [
      { name: "menuName", value: childMenu.menuName },
      { name: "menuPath", value: childMenu.menuPath },
    ],
    input: childMenu.input,
  }));

  const [inputList, setInputList] = useState(
    lists.map((list) => ({
      key: list.key,
      parentMenuId: list.parentMenuId,
      list: list.items.map((item, j) => ({ [item.name]: item.value })),
    }))
  );

  const [childrenInputList, setChildrenInputList] = useState(
    childrenLists.map((childrenList, i) => ({
      key: childrenList.key,
      parentMenuId: childrenList.parentMenuId,
      list: childrenList.items.map((item, j) => ({
        [item.name]: item.value,
      })),
    }))
  );

  const handleParentMenuFieldChange = ({ name, value }, key) => {
    setInputList([
      ...inputList.map((input) =>
        input.key === key
          ? {
              key: input.key,
              parentMenuId: input.parentMenuId,
              list: input.list.map((item) => ({ ...item, [name]: value })),
            }
          : input
      ),
    ]);
  };

  const handleChildrenFieldChange = ({ name, value }, key) => {
    setChildrenInputList([
      ...childrenInputList.map((input) =>
        input.key === key
          ? {
              key: input.key,
              parentMenuId: input.parentMenuId,
              list: input.list.map((item) => ({ ...item, [name]: value })),
            }
          : input
      ),
    ]);
  };

  useEffect(() => {
    setInputList(
      lists.map((list) => ({
        key: list.key,
        parentMenuId: list.parentMenuId,
        list: list.items.map((item, j) => ({ [item.name]: item.value })),
      }))
    );
  }, [temporaryMenuList]);

  useEffect(() => {
    setChildrenInputList(
      childrenLists.map((childrenList, i) => ({
        key: childrenList.key,
        parentMenuId: childrenList.parentMenuId,
        list: childrenList.items.map((item, j) => ({
          [item.name]: item.value,
        })),
      }))
    );
  }, [temporaryChildrenMenuList]);

  return (
    <MenuListTemplateBlock>
      <Table
        lists={lists}
        inputList={inputList}
        listItemClick={handleParentMenuClick}
        handleAdd={handleParentMenuAdd}
        handleSave={handleSaveMenu}
        handleRemoveItem={onRemoveMenu}
        handleToggle={handleParentToggleInput}
        handleChangeField={handleParentMenuFieldChange}
        headerList={["메뉴명", "메뉴 경로", "수정", "삭제"]}
        headerTitle={"상단 메뉴"}
      />
      <br />
      <br />
      <Table
        lists={childrenLists}
        inputList={childrenInputList}
        handleAdd={handleChildMenuAdd}
        handleSave={handleSaveMenu}
        handleRemoveItem={onRemoveMenu}
        handleToggle={handleChildToggleInput}
        handleChangeField={handleChildrenFieldChange}
        headerList={["메뉴명", "메뉴 경로", "수정", "삭제"]}
        headerTitle={"하위 메뉴"}
      />
    </MenuListTemplateBlock>
  );
};

export default MenuListTemplate;
