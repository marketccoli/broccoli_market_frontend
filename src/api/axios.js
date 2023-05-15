import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
