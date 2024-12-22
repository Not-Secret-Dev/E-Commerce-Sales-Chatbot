import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: cornflowerblue;
  width: 100%;
  height: 42px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left p {
    margin-left: 6px;
    font-size: xx-small;
    color: white;
  }

  .left .headings p:first-child {
    font-weight: bold;
    font-size: x-small;
  }
`;

const IdImage = styled.div`
  background-color: white;
  margin-left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewChatBtn = styled.button`
  background-color: white;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="left">
        <IdImage>
          <img src="/robot.png" width="18" />
        </IdImage>
        <div className="headings">
          <p>Cart-bot</p>
          <p>To make your shopping sprees more enjoyable</p>
        </div>
      </div>
      <div className="right">
        <NewChatBtn>
          <img src="/new-message.png" width="18" />
        </NewChatBtn>
      </div>
    </Header>
  );
};

export default HeaderComponent;
