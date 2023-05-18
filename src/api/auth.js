import jwtDecode from "jwt-decode";
import axios from "./axios";
import Cookies from "js-cookie";

export const signupApi = async (signupData) => {
  try {
    const response = await axios.post(`/auth/signup`, signupData);
    return response;
  } catch (error) {
    throw error;
  }
};
export const loginApi = async (loginData) => {
  try {
    const response = await axios.post(`/auth/login`, loginData);

    const accessToken = response.data["authorization"];
    const refreshToken = response.data["refreshToken"];

    Cookies.set("authorization", accessToken);
    Cookies.set("refreshToken", refreshToken);

    return response;
  } catch (error) {
    throw error;
  }
};
export const socialLoginApi = async (key) => {
  try {
    const response = await axios.post(`/auth/sociallogin`, key);
    return response;
  } catch (error) {
    throw error;
  }
};
export const withdrawalApi = async () => {
  try {
    const response = await axios.delete(`/auth/withdrawal`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const logoutApi = async (user_id) => {
  try {
    const response = await axios.delete(`/auth/${user_id}/logout`, {
      params: {
        user_id: parseInt(user_id),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const emailVerificationApi = async (email) => {
  try {
    const response = await axios.post(`/auth/authEmail`, { email });
    return response;
  } catch (error) {
    throw error;
  }
};
export const emailVerificationNumApi = async (email) => {
  try {
    const response = await axios.post(`/auth/authEmail`, { email });
    return response;
  } catch (error) {
    throw error;
  }
};
