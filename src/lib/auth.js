import apiClient, { createRequest } from "./apiClient";

export const login = ({ adminId, password }) =>
  createRequest("post", "/login", { adminId, password });

export const getAdminList = () => createRequest("get", "/admin/list");

export const saveAdmin = (admin) => createRequest("post", "/admin", admin);
