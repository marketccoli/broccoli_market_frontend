import React from "react";
import {
  EmptyBox, ChatDetail, LastCommentDetails, LastComment, SubText, YourNickname, YourInfo, ListA, ListLi, ListUl, MynameDiv, ListbarNav, SidebarNav, ChatList, ChatDiv, Img
} from "../styles/chatPageSt";
import JoinChat from "../components/JoinChat";
export const ChatPage = () => {
  return (
    <>
      <ChatDiv>
        <div></div>
        <ChatList>
          <SidebarNav className="sidebar">
            <a href=" " style={{ textDecoration: "none" }}>
              <Img className="profile-image" src="https://dnvefa72aowie.cloudfront.net/origin/profile/profile_default.png" alt="">
              </Img>
            </a>
          </SidebarNav>
          <ListbarNav>
            <MynameDiv>본인 닉네임</MynameDiv>
            <ListUl>
              <ListLi>
                <ListA href=" ">
                  <div style={{ marginRight: "8px", height: " 40px" }}>
                    상대 프로필 사진
                  </div>
                  <div style={{ flex: "1 0 0%", width: "0px" }}>
                    <YourInfo>
                      <YourNickname>상대 닉네임</YourNickname>
                    </YourInfo>
                    <SubText>
                      <span>지역</span>
                      <span>.</span>
                      <span>3달 전</span>
                    </SubText>
                    <LastComment>
                      <LastCommentDetails>마지막 대화 내용</LastCommentDetails>
                    </LastComment>
                  </div>
                </ListA>

              </ListLi>

            </ListUl>
          </ListbarNav>
        </ChatList>
        <ChatDetail>
          <JoinChat />
          <EmptyBox>
            {/* <div>채팅할 상대를 선택해주세요.</div> */}

          </EmptyBox>
          <div>

          </div>
        </ChatDetail>
        <button>채팅하기</button>
        <div></div>
      </ChatDiv >
    </>
  );
};
