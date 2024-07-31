import axios from "axios";

const apiClient = axios.create({
  headers: {
    Authorization: "Bearer ".concat(localStorage.getItem("accessToken")),
  },
});

export const createRequest = async (method, url, data) => {
  try {
    if (method === "get") return await apiClient.get(url);
    else if (method === "post") return await apiClient.post(url, data);
    else if (method === "patch") return await apiClient.patch(url, data);
    else if (method === "put") return await apiClient.put(url, data);
    else if (method === "delete") return await apiClient.delete(url);
  } catch (e) {
    if (e.response.status === 401) {
      const response = await apiClient.get("/refreshToken");
      if (response.data === "login") return response;
      else localStorage.setItem("accessToken", response.data);

      apiClient.defaults.headers.Authorization = "Bearer ".concat(
        response.data
      );

      if (method === "get") return await apiClient.get(url);
      else if (method === "post") await apiClient.post(url, data);
      else if (method === "patch") return await apiClient.patch(url, data);
      else if (method === "put") return await apiClient.put(url, data);
      else if (method === "delete") return await apiClient.delete(url);
    }
  }
};

export default apiClient;
