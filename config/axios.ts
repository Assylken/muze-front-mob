import axios from "axios";
import { API_URL } from "../redux/http";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
