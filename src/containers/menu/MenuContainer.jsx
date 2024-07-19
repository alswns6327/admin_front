import React, { useState } from "react";
import MenuListTemplate from "../../components/menu/MenuListTemplate";
import MenuFormTamplate from "../../components/menu/MenuFormTamplate";
import { useDispatch, useSelector } from "react-redux";
import menu, { asyncRemoveTheMenu, asyncSaveTheMenu } from "../../modules/menu";

const MenuContainer = () => {
  const { menuList } = useSelector(({ menu }) => menu);
  const dispatch = useDispatch();
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

  return (
    <>
      <MenuListTemplate menuList={menuList} onRemoveMenu={onRemoveMenu} />
      <MenuFormTamplate
        onChangeMenuForm={onChangeMenuForm}
        saveMenu={saveMenu}
      />
    </>
  );
};

export default MenuContainer;
