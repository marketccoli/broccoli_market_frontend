import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ ismine }) => (ismine ? "flex-end" : "flex-start")};
  
`;

const MessageWrapper = styled.div`
  display: flex;
  //내가 보낸게 오른쪽으로 
  flex-direction: ${({ ismine }) => (ismine ? "row-reverse" : "row")};
`;

const MessageContent = styled.div`
// 내가 보낸거 색깔 초록으로
  background-color: ${({ ismine }) => (ismine ? "#156016" : "#eaebee")};
  color: ${({ ismine }) => (ismine ? "#fff" : "#333")};
  /* display: inline-block; */
  border-radius: 20px;
  padding: 5px;
  margin-bottom: 10px;
  margin-right: ${({ ismine }) => (ismine ? "20px" : "0")};
  margin-left: ${({ ismine }) => (ismine ? "0" : "20px")};
  max-width: 40%;
`;

const MessageMeta = styled.div`
  display: flex;
  // 상대는 시간 반대로
  flex-direction: ${({ ismine }) => (ismine ? "row-reverse" : "row")};
  margin-left: ${({ ismine }) => (ismine ? "0" : "10px")};
  margin-right: ${({ ismine }) => (ismine ? "10px" : "0")};
`
const FooterForm = styled.form`
border: 1px solid #ddd;
border-radius: 8px;
display: flex;
flex-direction: column;
position: relative;
 margin: 15px;
height: 125px;
-webkit-box-pack: justify;
justify-content: space-between;
`

const InputMessage = styled.textarea`
margin: 12px 12px 0px;
width: calc(100% - 24px);
 height: 63px;
line-height: 150%;
padding: 0px;
resize: none;
 font-size: 14px;
 border: none;
   outline: none;
`
const MessageButton = styled.button`
  
 border-radius: 4px;
 width: 70px;
 font-weight: bold;
 font-size: 14px;
 background-color:  #156016;
color: #fff;
cursor: pointer;
margin: 10px;  
margin-left: auto;
`
const Content = styled.p`
display: inline-flex;
    margin: 0px;
    padding: 10px 14px;
    max-width: 484px;
    word-break: break-word;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.02em;
    border-radius: 20px 2px 20px 20px;
    color: rgb(255, 255, 255);

`
const TIme = styled.p`
font-size: 12px;
    color: #aaa;
/* border : 1px solid black; */

`


export { MessageMeta, MessageContent, MessageWrapper, MessageContainer, InputMessage, TIme, Content, FooterForm, MessageButton } 