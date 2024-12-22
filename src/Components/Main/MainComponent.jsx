import React from "react";
import styled from "styled-components";

const Main = styled.main`
  text-align: center;
  height: 78%;
  display: flex;
  justify-content: center;
  align-items: center;

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro p {
    color: #333;
  }

  .intro p:nth-child(2) {
    font-weight: 600;
    font-size: 18px;
  }

  .intro p:nth-child(3) {
    font-weight: 400;
    font-size: 11px;
    color: #a3a3a3;
  }
`;

const MainComponent = () => {
  return (
    <Main>
      <div className="intro">
        <img src="/public/robot.png" width="45" />
        <p>Cart Bot - Shopping Assistant</p>
        <p>The best companion in your shopping adventures</p>
      </div>
    </Main>
  );
};

export default MainComponent;
