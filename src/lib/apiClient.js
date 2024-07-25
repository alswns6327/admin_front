import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    console.log(111);
    if (e.response.status === 401) {
      const { data } = await apiClient.get("/refreshToken");
      if (data === "login") return 10;
      else localStorage.setItem("accessToken", data);

      console.log(data);
      console.log(localStorage.getItem("accessToken"));
      if (method === "get") return await apiClient.get(url);
      else if (method === "post") return await apiClient.post(url, data);
      else if (method === "patch") return await apiClient.patch(url, data);
      else if (method === "put") return await apiClient.put(url, data);
      else if (method === "delete") return await apiClient.delete(url);
    }
  }
};

export default apiClient;
