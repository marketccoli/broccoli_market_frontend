import axios from "./axios";

export const postTradeProduct = async (data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data);
    formData.append("title", "Product Title 1");
    formData.append("content", "Product Content 1");
    formData.append("price", 10000);
    formData.append("category", "카테고리 1");

    await axios.post("/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Image upload successful");
  } catch (error) {
    console.error("Image upload failed");
    console.error(error);
  }
};
export const getTradeProduct = async (data) => {
  try {
    const response = await axios.get("/product");
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};
export const getOneTradeProduct = async (productId) => {
  try {
    const response = await axios.get(`/product/${productId}`, {
      params: {
        product_id: parseInt(productId),
      },
    });
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
};

export const editOneTradeProduct = async (productId, data) => {
  try {
    const response = await axios.patch(`/product/${productId}`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneTradeProduct = async (productId) => {
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

export const toggleLikeTradeProduct = async (productId) => {
  try {
    const response = await axios.put(`/product/${productId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchProduct = async (keyword) => {
  try {
    const response = await axios.get(`/product/search?keyword=${keyword}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getProductListByCategory = async (category) => {
  try {
    const response = await axios.get(`/products?category=${category}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const signupApi = async (signupData) => {
  try {
    const response = await axios.post(`/auth/signup`, signupData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const loginApi = async (loginData) => {
  try {
    const response = await axios.post(`/auth/login`, loginData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
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
    const response = await axios.post(`/auth/mail`, email);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getMySoldProducts = async () => {
  try {
    const response = await axios.get(`/mypage/sold`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getMyLikedProducts = async () => {
  try {
    const response = await axios.get(`/mypage/sold`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getMyBoughtProducts = async () => {
  try {
    const response = await axios.get(`/mypage/buy`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editMyInfo = async (data) => {
  try {
    const response = await axios.patch(`/mypage`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMyAccount = async () => {
  try {
    const response = await axios.delete(`/mypage`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
