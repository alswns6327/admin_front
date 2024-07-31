import apiClient, { createRequest } from "./apiClient";

export const getMenuList = () => createRequest("get", "/menu");

export const saveMenu = (menu) => createRequest("post", "/menu", menu);

export const removeMenu = (menuId) =>
  createRequest("patch", "/menu", { id: menuId });
