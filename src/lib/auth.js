import apiClient from "./apiClient";

export const login = ({ adminId, password }) =>
  apiClient.post("login", { adminId, password });
