import { styled } from "styled-components";


const ChatDiv = styled.div`
  display: flex;
  overflow-x: auto;
  position: relative;
  background-color: #f2f3f6;
  margin: 0px auto;
  height: 100%;
    /* height: calc(100vh - 100px); */
  box-sizing: border-box;
  padding: 0px 20px;

  * {
    box-sizing: border-box;
     flex: 1;

  }
`;

const ChatList = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const SidebarNav = styled.nav`
  background-color: #eaebee;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #0017580d;
  border-right: 1px solid #0017580d;
  padding: 20px 13px;
  width: 72px;

.profile-image.selected {
box-shadow: 0px 0px 0 2px #eaebee,0px 0px 0 4px rgb(255, 126, 54);

}

.profile-image {
border: 1px solid #dcdee3;
    border-radius: 50%;
    width: 44px;
    height: 44px;

}

`;

const Img = styled.img`

`

const ListbarNav = styled.nav`
  display: flex;
  border-right: 1px solid #0017580d;
  width: 312px;
  min-width: 312px;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
  -webkit-box-pack: justify;
`;

const MynameDiv = styled.div`
  position: relative;
  display: flex;
  height: 64px;
  min-height: 64px;
  border-bottom: 1px solid #0017580d;
  padding: 0px 20px;
  -webkit-box-align: center;
  align-items: center;
`;
const ListUl = styled.ul`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: calc(100%-56%);
  list-style: none;
  overflow: hidden auto;
  background-color: #fff;
`;

const ListLi = styled.li`
  position: relative;
`;

const ListA = styled.a`
  display: flex;
  padding: 16px;
  height: 72px;
  background-color: #fff;
  border-bottom: 1px solid #0017580d;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.6s ease 0s, background-size 0.6s ease 0s;
  background-position: center center;
  contain: content;
  text-decoration: none;
`;

const YourInfo = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
`;
const YourNickname = styled.span`
  height: 20px;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: -0.02em;
  color: #212124;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubText = styled.div`
  margin-left: 4px;
  color: #868b94;
  font-size: 12px;
  white-space: nowrap;
`;

const LastComment = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
  font-size: 13px;
  color: #4d5159;
`;

const LastCommentDetails = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChatDetail = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaebee;
  min-width: 812px;
  max-width: 812px;
  background-color: #fff;
`;

const EmptyBox = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  
`;

export {
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
  Img
};
