import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Add this line to enable sending cookies
});

// Add an interceptor to include tokens in the request headers
instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get("authorization");
  const refreshToken = Cookies.get("refreshToken");
  console.log(refreshToken, accessToken);
  if (accessToken && refreshToken) {
    config.headers.cookie = `access_token=${accessToken}; refresh_token=${refreshToken}`;
  }

  return config;
});

export default instance;
