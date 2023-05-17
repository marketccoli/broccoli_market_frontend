import React from "react";
import { useQuery } from "react-query";
import {
  EmptyBox,
  ChatDetail,
  LastCommentDetails,
  LastComment,
  SubText,
  YourNickname,
  YourInfo,
  ListA,
  ListLi,
  ListUl,
  MynameDiv,
  ListbarNav,
  SidebarNav,
  ChatList,
  ChatDiv,
  Img,
} from "../styles/chatPageSt";
import JoinChat from "../components/JoinChat";
import { fetchChatLists } from "../api/chat";

export const ChatPage = () => {
  const { isLoading, isError, data } = useQuery("fetchChatLists", fetchChatLists);
  console.log(data);

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <>
      <ChatDiv>
        <div></div>
        <ChatList>
          <SidebarNav className="sidebar">
            <a href=" " style={{ textDecoration: "none" }}>
              <Img className="profile-image" src="https://dnvefa72aowie.cloudfront.net/origin/profile/profile_default.png" alt="" />
            </a>
          </SidebarNav>
          <ListbarNav>
            <MynameDiv>본인 닉네임</MynameDiv>
            <ListUl>
              {data &&
                data.map((chat) => {
                  console.log("map안", chat);
                  return (
                    <ListLi key={chat.chat_id}>
                      <ListA href=" ">
                        {/* 채팅 목록 항목을 표시하는 코드 */}
                        <div style={{ marginRight: "8px", height: "40px" }}></div>
                        <div style={{ flex: "1 0 0%", width: "0px" }}>
                          <YourInfo>
                            <YourNickname>{chat.seller_nickname}</YourNickname>
                          </YourInfo>
                          <SubText>
                            <span>{chat.address}</span>
                            <span>.</span>
                            <span>{chat.updatedAt}</span>
                          </SubText>
                          <LastComment>
                            <LastCommentDetails>{chat.lastestContent}</LastCommentDetails>
                          </LastComment>
                        </div>
                      </ListA>
                    </ListLi>
                  );
                })}
            </ListUl>
          </ListbarNav>
        </ChatList>
        <ChatDetail>
          {/* <JoinChat /> */}
          <EmptyBox>{/* <div>채팅할 상대를 선택해주세요.</div> */}</EmptyBox>
          <div></div>
        </ChatDetail>
        <div></div>
      </ChatDiv>
    </>
  );
};
