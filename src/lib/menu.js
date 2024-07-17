import apiClient from "./apiClient";

export const getMenuList = () => apiClient.get("menu");
