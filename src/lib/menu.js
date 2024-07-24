import apiClient from "./apiClient";

export const getMenuList = () => apiClient.get("/menu");

export const saveMenu = (menu) => apiClient.post("/menu", menu);

export const removeMenu = (menuId) => apiClient.patch("/menu", { id: menuId });
