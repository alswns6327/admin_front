import React, { useEffect, useState } from "react";
import MenuListTemplate from "../../components/menu/MenuListTemplate";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncRemoveTheMenu,
  asyncSaveTheMenu,
  initTemporaryMenuList,
} from "../../modules/menu";
import apiRequest from "../../lib/api/apiRequest";
import { useNavigate } from "react-router-dom";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { menuList } = useSelector(({ menu }) => menu);
  const [temporaryMenuList, setTemporaryMenuList] = useState([
    ...menuList.map((menu) => ({ ...menu, input: false })),
  ]);

  const [temporaryChildrenMenuList, setTemporaryChildrenMenuList] = useState(
    []
  );
  const [selectedParentMenuId, setSelectedParentMenuId] = useState(-1);
  const [newMenuId, setNewMenuId] = useState(0);

  useEffect(() => {
    setTemporaryMenuList([
      ...menuList.map((menu) => ({ ...menu, input: false })),
    ]);
  }, [menuList]);

  useEffect(() => {
    const childrenMenu =
      selectedParentMenuId !== -1 && typeof selectedParentMenuId !== "string"
        ? temporaryMenuList.filter(
            (parentMenu) => parentMenu.id === selectedParentMenuId
          )[0].childrenMenu
        : [];
    console.log(222);
    setTemporaryChildrenMenuList(
      childrenMenu
        ? [...childrenMenu.map((childMenu) => ({ ...childMenu, input: false }))]
        : []
    );
    console.log(333);
  }, [temporaryMenuList]);

  const handleSaveMenu = ([{ key: id, list: items, parentMenuId }]) => {
    const [{ menuName }, { menuPath }] = items;
    if (typeof id === "string") id = -1;
    const menu = {
      menuName,
      menuPath,
      id,
      parentMenuId: parentMenuId,
      menuOrder: 5,
    };
    apiRequest(asyncSaveTheMenu, menu, dispatch, navigator);
  };

  const handleRemoveMenu = (menuId) => {
    if (typeof menuId === "string") {
      if (temporaryMenuList.filter((menu) => menu.id === menuId).length === 1) {
        setTemporaryMenuList(
          temporaryMenuList.filter((menu) => menu.id !== menuId)
        );
      } else {
        setTemporaryChildrenMenuList(
          temporaryChildrenMenuList.filter((menu) => menu.id !== menuId)
        );
      }
      return;
    }
    apiRequest(asyncRemoveTheMenu, menuId, dispatch, navigator);
  };

  const handleParentMenuClick = (parentMenuId) => {
    const childrenMenu = temporaryMenuList.filter(
      (parentMenu) => parentMenu.id === parentMenuId
    )[0].childrenMenu;
    setSelectedParentMenuId(parentMenuId);
    setTemporaryChildrenMenuList([
      ...childrenMenu.map((childMenu) => ({ ...childMenu, input: false })),
    ]);
  };

  const handleParentMenuAdd = () => {
    setTemporaryMenuList([
      ...temporaryMenuList,
      {
        id: "new_".concat(newMenuId),
        parentMenuId: 0,
        menuName: "",
        menuPath: "",
        input: true,
        childrenMenu: [],
      },
    ]);
    setNewMenuId(newMenuId + 1);
  };

  const handleChildMenuAdd = () => {
    if (selectedParentMenuId === -1) return alert("상단 메뉴를 선택해주세요.");
    setTemporaryChildrenMenuList([
      ...temporaryChildrenMenuList,
      {
        id: "new_".concat(newMenuId),
        parentMenuId: selectedParentMenuId,
        menuName: "",
        menuPath: "",
        input: true,
      },
    ]);
    setNewMenuId(newMenuId + 1);
  };

  const handleParentToggleInput = (menuId) => {
    setTemporaryMenuList([
      ...temporaryMenuList.map((menu) =>
        menu.id === menuId
          ? { ...menu, input: !menu.input }
          : { ...menu, input: false }
      ),
    ]);
  };

  const handleChildToggleInput = (menuId) => {
    setTemporaryChildrenMenuList([
      ...temporaryChildrenMenuList.map((childMenu) =>
        childMenu.id === menuId
          ? { ...childMenu, input: !childMenu.input }
          : { ...childMenu, input: false }
      ),
    ]);
  };

  return (
    <>
      <MenuListTemplate
        temporaryMenuList={temporaryMenuList}
        temporaryChildrenMenuList={temporaryChildrenMenuList}
        handleRemoveMenu={handleRemoveMenu}
        handleParentMenuClick={handleParentMenuClick}
        handleParentMenuAdd={handleParentMenuAdd}
        handleChildMenuAdd={handleChildMenuAdd}
        handleParentToggleInput={handleParentToggleInput}
        handleChildToggleInput={handleChildToggleInput}
        handleSaveMenu={handleSaveMenu}
      />
    </>
  );
};

export default MenuContainer;
