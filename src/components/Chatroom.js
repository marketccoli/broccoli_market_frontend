import React, { useState, useEffect } from 'react'
import ScrollToBottom from "react-scroll-to-bottom"


function Chatroom({ socket, username, room }) {
    //Chat 컴포넌트는 socket, username, room이라는 세 개의 props를 받음
    // socket prop은 Socket.IO의 클라이언트 측 객체. username prop은 채팅에 참여하는 사용자의 이름 room prop은 사용자가 참여하려는 채팅방의 ID
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    // 메시지를 저장하기 위한 currentMessage state

    const sendMessage = async () => {
        //sendMessage 함수는 현재 메시지가 비어 있지 않은 경우에만 실행됨.
        //  현재 메시지와 함께 소켓 이벤트 "send_message"를 발생시킴.이 이벤트는 서버 측에서 처리
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_message", messageData)
            //클라이언트가 send_message라는 이벤트를 서버로 보내는 역할. 보낼 데이터는 messageData변수에 저장되어있음
            setMessageList((list) => [...list, messageData])
            setCurrentMessage("")
        }
    }
    useEffect(() => {
        // useEffect 훅을 사용해서 socket 객체에서 "receive_message" 이벤트를 수신 대기. 
        // 이 이벤트는 다른 사용자가 보낸 메시지를 수신하는 데 사용.
        // 수신된 메시지는 console.log를 사용하여 콘솔에 출력.
        socket.on("receive_message", (data) => {

            setMessageList((list) => [...list, data])

            // console.log(data)
            //  클라이언트가 서버로부터 "receive_message"라는 이벤트를 받을 때마다 callback 함수가 실행되도록 하는 역할
        })
    }, [socket])

    return (
        <div>
            {/* 현재 Chat 컴포넌트는 채팅 창의 헤더, 바디 및 푸터를 구성 */}
            <div className='chat-header'>
                <p>Live Chat</p>
            </div>
            <div className='chat-body'>
                <ScrollToBottom className='message-container'>
                    {messageList.map((messageContent) => {
                        return <div className='message' id={username === messageContent.author ? "you " : "other"}>
                            < div ><div className='message-content'><p>{messageContent.message}</p></div>

                                <div className='message-meta'>
                                    <p id="time">{messageContent.time}</p>
                                    <p id="author">{messageContent.author}</p>

                                </div>
                            </div>
                        </div>
                        // <h1>{messageContent.message}</h1>

                    })}
                </ScrollToBottom>
            </div >
            <div className='chat-footer'>
                {/* 푸터에는 메시지를 입력하는 input 요소와 메시지를 보내는 버튼이 포함 */}
                <input type="text" value={currentMessage} placeholder='Hey...' onChange={(event) => {
                    setCurrentMessage(event.target.value)
                    //  메시지가 입력될 때마다 currentMessage state가 업데이트
                }}
                    onkeyPress={(event) => { event.key === "Enter" && sendMessage() }}
                />
                <button onClick={sendMessage}>&#9658;</button>
                {/*  버튼을 클릭하면 sendMessage 함수가 실행되고, 소켓 이벤트가 발생 */}
            </div>

        </div >
    )
}

export default Chatroom