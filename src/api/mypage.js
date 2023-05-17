import axios from "./axios";

export const getMySellProducts = async () => {
  try {
    const response = await axios.get(`/mypage/sold`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getMyLikedProducts = async () => {
  try {
    const response = await axios.get(`/mypage/likes`, { withCredentials: true });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMyBoughtProducts = async () => {
  try {
    const response = await axios.get(`/mypage/bought`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editMyInfo = async (data) => {
  try {
    const response = await axios.patch(`/mypage`, data);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMyAccount = async () => {
  try {
    const response = await axios.delete(`/mypage`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
