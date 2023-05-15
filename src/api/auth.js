import jwtDecode from "jwt-decode";
import axios from "./axios";
import Cookies from "js-cookie";

export const signupApi = async (signupData) => {
  try {
    const response = await axios.post(`/auth/signup`, signupData);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
export const loginApi = async (loginData) => {
  try {
    const response = await axios.post(`/auth/login`, loginData);

    // Check if the login was successful based on the response

    const accessToken = response.data["authorization"]
    const refreshToken = response.data["refreshToken"]
    console.log(accessToken);
    console.log(refreshToken);
    const decodedRefreshToken = jwtDecode(refreshToken);
    const decodedAccessToken = jwtDecode(accessToken);

    Cookies.set("authorization", accessToken);
    Cookies.set("refreshToken", refreshToken);

    console.log("Access Token:", decodedAccessToken);
    console.log("Refresh Token:", decodedRefreshToken);

    return response;
  } catch (error) {
    throw error;
  }
};
export const socialLoginApi = async (key) => {
  try {
    const response = await axios.post(`/auth/sociallogin`, key);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const withdrawalApi = async () => {
  try {
    const response = await axios.delete(`/auth/withdrawal`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const logoutApi = async (user_id) => {
  try {
    const response = await axios.delete(`/auth/${user_id}/logout`, {
      params: {
        user_id: parseInt(user_id),
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const emailVerificationApi = async (email) => {
  try {
    const response = await axios.post(`/auth/authEmail`, { email });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const emailVerificationNumApi = async (email) => {
  try {
    const response = await axios.post(`/auth/authEmail`, { email });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
