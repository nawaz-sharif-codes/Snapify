import axios from "axios";

// https://picsum.photos/v2/list?page=2&limit=100
const axiosClient = axios.create({
  baseURL: "https://picsum.photos/v2/list",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;