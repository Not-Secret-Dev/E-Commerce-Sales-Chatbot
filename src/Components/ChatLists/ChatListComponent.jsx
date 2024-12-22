import React from "react";
import styled from "styled-components";

const ChatList = styled.div`
  height: 78%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
  gap: 10px;
`;

const ChatBubble = styled.div`
  max-width: 70%;
  padding: 10px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ isUser }) => (isUser ? "#fff" : "#000")};
  background-color: ${({ isUser }) => (isUser ? "#0078d7" : "#e1e1e1")};
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ChatListComponent = ({ messages }) => {
  return (
    <ChatList>
      {messages.map((message, index) => (
        <ChatBubble key={index} isUser={message.isUser}>
          {message.text}
        </ChatBubble>
      ))}
    </ChatList>
  );
};

export default ChatListComponent;
