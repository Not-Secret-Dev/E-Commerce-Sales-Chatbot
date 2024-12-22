import React from "react";
import styled from "styled-components";

const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 6px;
`;

const InputPrompt = styled.input`
  height: 28px;
  width: 250px;
  padding: 2px 8px;
  background-color: #e1e1e1;
  outline: none;
  border: none;
  box-shadow: inset 0 2px 3px #a1a1a1;
  border-radius: 20px;
  font-size: small;

  &::placeholder {
    font-size: smaller;
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: cornflowerblue;
  border: none;
  outline: none;
  border-radius: 100px;
`;

const InputComponent = () => {
  return (
    <Inputs>
      <InputPrompt type="text" placeholder="Ask me anything..." />
      <SendButton>
        <img src="/public/send.png" alt="Send" width="17" />
      </SendButton>
    </Inputs>
  );
};

export default InputComponent;
