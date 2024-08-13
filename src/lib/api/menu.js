import apiClient, { createRequest } from "./apiClient";

export const getMenuList = () => createRequest("get", "/menu/list");

export const saveMenu = (menu) => createRequest("post", "/menu", menu);

export const removeMenu = (menuId) =>
  createRequest("delete", "/menu/".concat(menuId));
