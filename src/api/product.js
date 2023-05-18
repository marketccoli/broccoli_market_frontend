import axios from "./axios";

export const postTradeProduct = async (data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data.photo);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("price", data.price);
    formData.append("category", data.category);

    await axios.post("/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
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

export const editOneTradeProduct = async ([productId, data]) => {
  try {
    console.log(data);
    const response = await axios.patch(`/product/${productId}`, data);

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

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const tradCompleteProduct = async (productId) => {
  try {
    const response = await axios.patch(`/product/${productId}/sold`, {
      params: {
        product_id: parseInt(productId),
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const toggleLikeTradeProduct = async (productId) => {
  try {
    const response = await axios.put(`/product/${productId}/likes`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchProduct = async (keyword) => {
  try {
    const response = await axios.get(`/product/search?keyword=${keyword}`, {
      query: {
        keyword: keyword,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductListByRegion = async ([city, gu]) => {
  try {
    const response = await axios.get(`/product/region?region=${city} ${gu}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
