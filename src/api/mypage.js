import axios from "./axios";

export const getMySellProducts = async () => {
  try {
    const response = await axios.get(`/mypage/selling`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getMyLikedProducts = async () => {
  try {
    const response = await axios.get(`/mypage/likes`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMyBoughtProducts = async () => {
  try {
    const response = await axios.get(`/mypage/sold`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getMyInfo = async () => {
  try {
    const response = await axios.get(`/mypage/info`);

    return response.data.MyInfo;
  } catch (error) {
    console.log(error);
  }
};
export const editMyInfo = async (data) => {
  try {
    const response = await axios.patch(`/mypage`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMyAccount = async () => {
  try {
    const response = await axios.delete(`/mypage`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
