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
