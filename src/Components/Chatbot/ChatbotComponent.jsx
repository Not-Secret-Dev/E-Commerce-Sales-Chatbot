import React from "react";
import styled from "styled-components";
import HeaderComponent from "../Header/HeaderComponent";
import FooterComponent from "../Footer/FooterComponent";
import MainComponent from "../Main/MainComponent";
import InputComponent from "../Inputs/InputComponent";

const Chatbot = styled.div`
  width: 350px;
  height: 450px;
  margin: 76px auto;
  outline: 2px solid #c3c3c3;
  border-radius: 20px;
`;

const ChatbotComponent = () => {
  return (
    <Chatbot>
      <HeaderComponent />
      <MainComponent />
      <InputComponent />
      <FooterComponent />
    </Chatbot>
  );
};

export default ChatbotComponent;
