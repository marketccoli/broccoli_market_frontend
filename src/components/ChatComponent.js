import { useRef, useEffect } from "react";
import { dateConvert } from "../utils/dateConvert";

const ChatComponent = ({ currentTabMessages, user_id }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [currentTabMessages]);

  return (
    <div ref={chatContainerRef} className="overflow-auto h-80">
      {currentTabMessages
        ?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((chat, index) => (
          <div key={index} className="mb-2">
            <div className={`font-bold   ${user_id === chat.sender_nickname ? "text-right" : "text-left"}`}>
              {user_id === chat.sender_nickname ? "나" : chat.sender_nickname}
            </div>

            <div className={` ${user_id === chat.sender_nickname ? "text-right" : "text-left"}`}>{chat.text}</div>
            <div className={`text-xs ${user_id === chat.sender_nickname ? "text-right" : "text-left"}`}>{dateConvert(chat.createdAt)}</div>
          </div>
        ))}
    </div>
  );
};

export default ChatComponent;
