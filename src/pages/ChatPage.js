import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { GreenButton } from "../components/common/GreenButton";
import { fetchChat, fetchChatLists } from "../api/chat";

export const ChatPage = () => {
  const user_id = useSelector((state) => state.auth.user_id);
  const [chatList, setChatList] = useState([]);
  const [currentChatTab, setCurrentChatTab] = useState(null);
  const [currentTabMessages, setCurrentTabMessages] = useState([]);

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

  const onClickFetchChat = (chatId) => {
    setCurrentChatTab(chatId);
    chatListMutation.mutate(chatId);
  };

  useEffect(() => {
    if (currentChatTab) {
      chatListMutation.mutate(currentChatTab);
    }
  }, [currentChatTab]);

  return (
    <div className="container mx-auto mt-32">
      <div className="flex">
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-lg font-bold mb-4">Chat List</h2>
          <div>
            {chatList?.map((chat) => (
              <div
                key={chat.chat_id}
                className={`p-2 mb-2 cursor-pointer ${chat.chat_id === currentChatTab ? "bg-gray-300" : ""}`}
                onClick={() => onClickFetchChat(chat.chat_id)}
              >
                {chat.chat_id}
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 bg-white p-4">
          <h2 className="text-lg font-bold mb-4">Messages</h2>
          <div>
            {currentTabMessages?.map((chat, index) => (
              <div key={index} className="mb-2">
                <div className="font-bold">{chat.sender_nickname}</div>
                <div>{chat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <GreenButton buttonText="Fetch Chat List" clickHandler={onClickFetchChatList} />
      </div>
    </div>
  );
};
