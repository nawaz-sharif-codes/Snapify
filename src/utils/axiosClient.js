import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://picsum.photos/v2",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;