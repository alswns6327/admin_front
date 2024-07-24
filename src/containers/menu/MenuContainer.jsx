import React, { useEffect, useState } from "react";
import MenuListTemplate from "../../components/menu/MenuListTemplate";
import MenuFormTemplate from "../../components/menu/MenuFormTemplate";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncRemoveTheMenu,
  asyncSaveTheMenu,
  initTemporaryMenuList,
} from "../../modules/menu";

const MenuContainer = () => {
  const { menuList, temporaryMenuList } = useSelector(({ menu }) => menu);

  const dispatch = useDispatch();
  const [childForm, setChildForm] = useState({});
  const [menuForm, setMenuForm] = useState({ menuName: "", menuPath: "" });

  const onChangeMenuForm = (e) => {
    const { name, value } = e.target;
    setMenuForm({ ...menuForm, [name]: value });
  };

  const onChildFormChange = (e) => {
    const { name, value } = e.target;
  };

  const saveMenu = () => {
    dispatch(asyncSaveTheMenu({ ...menuForm, menuOrder: 1, parentMenuId: 0 }));
  };

  const onRemoveMenu = (menuId) => {
    dispatch(asyncRemoveTheMenu(menuId));
  };

  const onAddMenu = (menuId) => {};

  useEffect(() => {
    dispatch(initTemporaryMenuList(menuList));
  }, [menuList, dispatch]);

  return (
    <>
      <MenuListTemplate
        temporaryMenuList={temporaryMenuList ? temporaryMenuList : []}
        onRemoveMenu={onRemoveMenu}
      />
      <MenuFormTemplate
        onChangeMenuForm={onChangeMenuForm}
        saveMenu={saveMenu}
      />
    </>
  );
};

export default MenuContainer;
