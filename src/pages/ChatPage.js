import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const ChatPage = () => {
  // Component state variables
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  // Socket.io connection
  const socket = io("ws://localhost:3002"); // Replace with your server URL

  // useEffect to handle socket events
  useEffect(() => {
    // Add event listeners for incoming messages and user updates
    socket.on("getMessage", handleIncomingMessage);
    socket.on("getUsers", handleUserUpdate);

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Event handler for incoming messages
  const handleIncomingMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Event handler for user updates
  const handleUserUpdate = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  // Event handler for sending messages
  const sendMessage = () => {
    const message = {
      senderId: "replace-with-sender-id",
      receiverId: "replace-with-receiver-id",
      text: currentMessage,
    };
    socket.emit("sendMessage", message);
    setCurrentMessage("");
  };

  return (
    <div className="container mx-auto mt-32">
      {/* User list */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Online Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.userId} className="mb-1">
              {user.userId}
            </li>
          ))}
        </ul>
      </div>

      {/* Message list */}
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Chat</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="mb-1">
              <strong>{message.senderId}:</strong> {message.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Message input */}
      <div className="flex mt-4">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border border-gray-300 rounded-l p-2 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          disabled={!currentMessage}
          className={`bg-blue-500 text-white px-4 py-2 rounded-r ${!currentMessage && "cursor-not-allowed opacity-50"}`}
        >
          Send
        </button>
      </div>
    </div>
  );
};
