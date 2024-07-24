import apiClient from "./apiClient";

export const login = ({ adminId, password }) =>
  apiClient.post("/login", { adminId, password });

export const getAdminList = () => apiClient.get("/admin/list");
