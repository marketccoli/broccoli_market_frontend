import { io } from "socket.io-client";
import React, { useState } from "react";
import Chatroom from "../components/Chatroom";

const socket = ""; //io.connect("http://localhost:3002");

function JoinChat() {
  //username과 room 상태 변수를 생성
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  //joinRoom 함수를 생성하고, 클라이언트에서 입력한 username과 room 정보를 이용해 해당 room에 클라이언트를 추가하는 "join_room" 이벤트를 발생
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {/*username, room 정보를 입력할 수 있는 input 태그와 joinRoom 함수를 실행하는 버튼을 출력 */}
      {!showChat ? (
        <div>
          <h3> Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Room Id..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          ></input>
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chatroom socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
//  Chat 컴포넌트에서는 props로 전달받은 socket, username, room 정보를 이용하여 실시간 채팅을 구현
// Chat 컴포넌트에 socket, username, room 정보를 props로 전달
export default JoinChat;
