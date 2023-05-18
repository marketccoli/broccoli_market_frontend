import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { addChatContents, fetchChat, fetchChatLists } from "../api/chat";
import { useParams } from "react-router-dom";
import ChatComponent from "../components/ChatComponent";
import { dateConvert } from "../utils/dateConvert";

import "react-quill/dist/quill.snow.css";

import { GreenButton } from "../components/common/GreenButton";

export const ChatPage = () => {
  const user_id = useSelector((state) => state.auth.user_id);
  const socket = useSelector((state) => state.auth.socket);
  const params = useParams();
  const [chatList, setChatList] = useState([]);
  const [currentChatTab, setCurrentChatTab] = useState(params.id ? params.id : "");
  const [currentTabMessages, setCurrentTabMessages] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  const chatMutation = useMutation(fetchChatLists, {
    onSuccess: (response) => {
      setChatList(response);
    },
  });

  const chatListMutation = useMutation(fetchChat, {
    onSuccess: (response) => {
      setCurrentTabMessages(response.messages);
    },
  });

  const onClickFetchChatList = () => {
    chatMutation.mutate(user_id);
  };

  const onClickFetchChat = async (chatId) => {
    await setCurrentChatTab(chatId);
    await socket?.emit("join_room", currentChatTab);
    chatListMutation.mutate(chatId);
  };
  console.log(editorContent);
  const handleSubmit = () => {
    // console.log(editorContent);
  };

  useEffect(() => {
    if (currentChatTab) {
      chatListMutation.mutate(currentChatTab);
    }
  }, [currentChatTab]);

  useEffect(() => {
    onClickFetchChatList();
  }, []);

  const sendMessage = async () => {
    await socket?.emit("sendMessage", editorContent);
    await addChatContents(currentChatTab, editorContent);
    chatListMutation.mutate(currentChatTab);
  };
  const handleInputChange = (e) => {
    setEditorContent(e.target.value);
  };
  return (
    <div className="container mx-auto mt-32">
      <GreenButton buttonText="click" clickHandler={sendMessage} />
      <div className="flex">
        <div className="w-1/4 bg-[#f5fff2] p-4 rounded-l-lg">
          <h2 className="text-lg font-bold mb-4">Chat List</h2>
          <div>
            {chatList
              ?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
              .map((chat) => (
                <div
                  key={chat.chat_id}
                  className={`p-2 mb-2 cursor-pointer flex flex-col rounded ${chat.chat_id === currentChatTab ? "bg-[#e5ffde]" : ""}`}
                  onClick={() => onClickFetchChat(chat.chat_id)}
                >
                  <div className="flex justify-between">
                    <span className="font-bold">{chat.seller_nickname}</span>
                    <span className="text-xs">{dateConvert(chat.updatedAt)}</span>
                  </div>
                  <span className="text-xs px-4 opacity-60">{chat.latestMessage ? chat.latestMessage.text : "최근 대화내역이 없습니다"}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="w-3/4 bg-white p-4">
          <h2 className="text-lg font-bold mb-4">Messages</h2>
          <div className="border-b border-gradient w-full my-4"></div>
          <ChatComponent currentTabMessages={currentTabMessages} user_id={user_id} />
          <input className="w-full border rounded" value={editorContent} onChange={handleInputChange} />
        </div>
      </div>
      {/* <div className="mt-4">
        <GreenButton buttonText="Fetch Chat List" clickHandler={onClickFetchChatList} />
      </div> */}
    </div>
  );
};
