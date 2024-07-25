import apiClient, { createRequest } from "./apiClient";

export const login = ({ adminId, password }) =>
  apiClient.post("/login", { adminId, password });

export const getAdminList = () => createRequest("get", "/admin/list");

export const saveAdmin = (admin) => apiClient.post("/admin", admin);
