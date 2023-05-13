import { async } from "q";
import axios from "./axios";

const postTradeProduct = async (data) => {
  try {
    const response = axios.post("/product", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getTradeProduct = async (data) => {
  try {
    const response = axios.get("/product");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getOneTradeProduct = async (productId) => {
  try {
    const response = await axios.get(`/product/${productId}`, {
      params: {
        product_id: parseInt(productId),
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const editOneTradeProduct = async (productId, data) => {
  try {
    const response = await axios.patch(`/product/${productId}`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const deleteOneTradeProduct = async (productId) => {
  try {
    const response = await axios.delete(`/product/${productId}`, {
      params: {
        product_id: parseInt(productId),
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const toggleLikeTradeProduct = async () => {
  try {
    const response = await axios.put(`/product/${productId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const searchProduct = async (keyword) => {
  try {
    const response = await axios.get(`/product/search?keyword=${keyword}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getProductListByCategory = async (category) => {
  try {
    const response = await axios.get(`/products?category=${category}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const signupApi = async (signupData) => {
  try {
    const response = await axios.post(`/auth/signup`, signupData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const loginApi = async (loginData) => {
  try {
    const response = await axios.post(`/auth/login`, loginData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const socialLoginApi = async (key) => {
  try {
    const response = await axios.post(`/auth/sociallogin`, key);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const withdrawalApi = async () => {
  try {
    const response = await axios.delete(`/auth/withdrawal`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const logoutApi = async (user_id) => {
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
const emailVerificationApi = async (email) => {
  try {
    const response = await axios.post(`/auth/mail`, email);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getMySoldProducts = async () => {
  try {
    const response = await axios.get(`/mypage/sold`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getMyLikedProducts = async () => {
  try {
    const response = await axios.get(`/mypage/sold`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getMyBoughtProducts = async () => {
  try {
    const response = await axios.get(`/mypage/buy`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const editMyInfo = async (data) => {
  try {
    const response = await axios.patch(`/mypage`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const deleteMyAccount = async () => {
  try {
    const response = await axios.delete(`/mypage`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
