import React, { useEffect, useState } from "react";
import MenuListTemplate from "../../components/menu/MenuListTemplate";
import MenuFormTemplate from "../../components/menu/MenuFormTemplate";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncRemoveTheMenu,
  asyncSaveTheMenu,
  initTemporaryMenuList,
} from "../../modules/menu";
import apiRequest from "../../lib/api/apiRequest";

const MenuContainer = () => {
  const dispatch = useDispatch();

  const { menuList } = useSelector(({ menu }) => menu);
  const [temporaryMenuList, setTemporaryMenuList] = useState([...menuList]);
  const [temporaryChildrenMenuList, setTemporaryChildrenMenuList] = useState(
    []
  );
  const [selectedParentMenuId, setSelectedParentMenuId] = useState(0);

  const [childForm, setChildForm] = useState({});
  const [menuForm, setMenuForm] = useState({ menuName: "", menuPath: "" });

  const onChangeMenuForm = (e) => {
    const { name, value } = e.target;
    setMenuForm({ ...menuForm, [name]: value });
  };

  const saveMenu = () => {
    dispatch(asyncSaveTheMenu({ ...menuForm, menuOrder: 1, parentMenuId: 0 }));
  };

  const onRemoveMenu = (menuId) => {
    dispatch(asyncRemoveTheMenu(menuId));
  };

  const handleParentMenuClick = (parentMenuId) => {
    const childrenMenu = temporaryMenuList.filter(
      (parentMenu) => parentMenu.id === parentMenuId
    )[0].childrenMenu;
    setSelectedParentMenuId(parentMenuId);
    setTemporaryChildrenMenuList([...childrenMenu]);
  };

  return (
    <>
      <MenuListTemplate
        temporaryMenuList={temporaryMenuList}
        temporaryChildrenMenuList={temporaryChildrenMenuList}
        onRemoveMenu={onRemoveMenu}
        handleParentMenuClick={handleParentMenuClick}
        selectedParentMenuId={selectedParentMenuId}
      />
      <MenuFormTemplate
        onChangeMenuForm={onChangeMenuForm}
        saveMenu={saveMenu}
      />
    </>
  );
};

export default MenuContainer;
