import React from 'react';
import { useDispatch } from 'react-redux';
import { createChat } from '../redux/modules/chatSlice'

const ChatButton = ({ sellerId, buyerId, productId, buyerNickname, sellerNickname, title, address }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(createChat({ product_id: productId, buyer_id: buyerId, buyer_nickname: buyerNickname, seller_id: sellerId, seller_nickname: sellerNickname, title, address }));
    };

    return (
        <button onClick={handleClick}>채팅하기</button>
    );
};

export default ChatButton;