// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { createChat, fetchChat } from '../redux/modules/chatSlice'
// import { useNavigate } from 'react-router-dom';
// import io from 'socket.io-client';
// const socket = io('http://localhost:3002');

// const ChatButton = ({ sellerId, buyerId, productId, buyerNickname, sellerNickname, title, address }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const handleClick = async () => {
//         const { payload: { newChat: { chat_id } } } = await dispatch(createChat({ product_id: productId, buyer_id: buyerId, buyer_nickname: buyerNickname, seller_id: sellerId, seller_nickname: sellerNickname, title, address }));

//         // await dispatch(fetchChat(chat_id));
//         socket.emit('join_room', chat_id);
//         navigate.push(`/chat/${chat_id}`)
//     };

//     return (
//         <button onClick={handleClick}>채팅하기</button>
//     );
// };

// export default ChatButton;