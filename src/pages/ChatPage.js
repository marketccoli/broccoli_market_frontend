import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { fetchChat, fetchChatLists } from "../api/chat";
import { useParams } from "react-router-dom";
import ChatComponent from "../components/ChatComponent";
import { dateConvert } from "../utils/dateConvert";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const ChatPage = () => {
  const user_id = useSelector((state) => state.auth.user_id);
  const params = useParams();
  const [chatList, setChatList] = useState([]);
  const [currentChatTab, setCurrentChatTab] = useState(params.id ? params.id : "");
  const [currentTabMessages, setCurrentTabMessages] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  const toolbar = {
    container: [["bold", "italic", "underline"]],
    handlers: {},
  };

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

  const handleSubmit = () => {
    console.log(editorContent);
  };

  useEffect(() => {
    if (currentChatTab) {
      chatListMutation.mutate(currentChatTab);
    }
  }, [currentChatTab]);

  useEffect(() => {
    onClickFetchChatList();
  }, []);

  return (
    <div className="container mx-auto mt-32">
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
          <ReactQuill
            className=" bg-white rounded-t mr-7"
            value={editorContent}
            onChange={setEditorContent}
            placeholder="Type your message... "
            modules={{ toolbar }}
          />
        </div>
      </div>
      {/* <div className="mt-4">
        <GreenButton buttonText="Fetch Chat List" clickHandler={onClickFetchChatList} />
      </div> */}
    </div>
  );
};
