import React, { useState } from "react";
import styled from "styled-components";
import HeaderComponent from "../Header/HeaderComponent";
import FooterComponent from "../Footer/FooterComponent";
import InputComponent from "../Inputs/InputComponent";
import ChatListComponent from "../ChatLists/ChatListComponent";
import { mockResponses } from "../../mockData";

const Chatbot = styled.div`
  width: 350px;
  height: 450px;
  margin: 76px auto;
  outline: 2px solid #c3c3c3;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);

  const handleResponse = (userMessage) => {
    const lowerCasedMessage = userMessage.toLowerCase();
    const botResponse =
      mockResponses[lowerCasedMessage]
        ? `Here are some suggestions: ${mockResponses[lowerCasedMessage].join(", ")}`
        : "Sorry, I don't understand. Can you rephrase?";

    setMessages((prev) => [
      ...prev,
      { text: userMessage, isUser: true },
      { text: botResponse, isUser: false },
    ]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <Chatbot>
      <HeaderComponent onNewChat={clearMessages} />
      <ChatListComponent messages={messages} />
      <InputComponent onResponse={handleResponse} />
      <FooterComponent />
    </Chatbot>
  );
};

export default ChatbotComponent;
