import axios from "axios";

const apiClient = axios.create({
  headers: {
    Authorization: "Bearer ".concat(localStorage.getItem("accessToken")),
  },
});

export default apiClient;
