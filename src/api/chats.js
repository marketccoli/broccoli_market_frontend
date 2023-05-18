import axios from "./axios";

export const getMyAllChats = async () => {
  try {
    const response = await axios.get("/chat");
    return response.data.chatLists;
  } catch (error) {
    throw new Error("Failed to fetch chat lists.");
  }
};

export const createNewChat = async (productId, userId, nickname) => {
  try {
    const response = await axios.post(`/chat/${productId}`, {
      user_id: userId,
      nickname,
    });
    return response.data.newChat;
  } catch (error) {
    throw new Error("Failed to create a new chat.");
  }
};

export const getChatHistory = async (chatId, userId, nickname) => {
  try {
    const response = await axios.get(`/chat/${chatId}`, {
      headers: {
        "x-user-id": userId,
        "x-nickname": nickname,
      },
    });
    return response.data.allChatHistory;
  } catch (error) {
    throw new Error("Failed to fetch chat history.");
  }
};

export const saveChatContents = async (chatId, contents, userId) => {
  try {
    const response = await axios.patch(
      `/chat/${chatId}`,
      {
        contents,
      },
      {
        headers: {
          chat_id: userId,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to save chat contents.");
  }
};
