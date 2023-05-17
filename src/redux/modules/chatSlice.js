import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 자신의 전체 채팅 목록 조회
export const fetchChatLists = createAsyncThunk(
  "chat/fetchChatLists",
  //로그인한 사용자의 아이디값을 가져와서 user_id변수에 저장
  async (_, { getState }) => {
    const user_id = getState().user.user_id;
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/chat`, {
      params: { user_id },
    });
    // console.log(response);
    return response.data.chatLists;
  }
);

// 새로운 1:1채팅 생성
export const createChat = createAsyncThunk(
  "chat/createChat",
  async ({ product_id, buyer_id, buyer_nickname, seller_id, seller_nickname, title, address }) => {
    const response = await axios.post(`/api/chat/${product_id}`, {
      buyer_id,
      buyer_nickname,
      seller_id,
      seller_nickname,
      title,
      address,
    });
    return response.data.newChat;
  }
);

//1:1채팅 내역 조회
export const fetchChat = createAsyncThunk("chat/fetchChat ", async (chat_id) => {
  const response = await axios.get(`/api/chat/${chat_id}`);
  return response.data.chat;
});

//1:1 채팅 내역 저장
export const addChatContents = createAsyncThunk("chat/addChatContents", async ({ chat_id, content, user_id }) => {
  const createdAt = new Date().toISOString();
  const response = await axios.patch(`/api/chat/${chat_id}`, {
    chat_id,
    contents: [
      {
        content,
        user_id,
        createdAt,
      },
    ],
  });
  return response.data.updatedChat;
});

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatLists: [],
    chat: null,
    newChat: null,
    selectedChat: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatLists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChatLists.fulfilled, (state, action) => {
        state.chatLists = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChatLists.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(createChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.newChat = action.payload;
        state.chatLists.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(createChat.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChat.fulfilled, (state, action) => {
        state.chat = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChat.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(addChatContents.pending, (state) => {
        state.isLoading = true;
      })

      //현재 상태의 chatLsits 배열에서 수정된 대화방 객체 비교
      .addCase(addChatContents.fulfilled, (state, action) => {
        const { chatLists } = state;
        //chatLists 배열의 모든 요소를 반복하면서 수정된 대화방 객체와 같은 chat_id 속성을 가진 대화방이 배열에서 몇번째 인덱스에 위치해있는지 찾음
        const { updatedChat } = action.payload;
        const chatIndex = chatLists.findIndex((chat) => chat.chat_id === updatedChat.chat_id);

        // chatLists[chatIndex].chat_contents에 추가

        //그 다음 chatLists와 selectedChat 상태를 업데이트
        if (chatIndex !== -1) {
          chatLists[chatIndex].chat_contents.push(...updatedChat.chat_contents);
          state.chatLists = [...chatLists];
          state.selectedChat = { ...updatedChat };
        }
        // state.isLoading을 false로 설정
        state.isLoading = false;
      })
      .addCase(addChatContents.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default chatSlice.reducer;
