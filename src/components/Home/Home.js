import React from "react";
import styled from "styled-components";
import image from "../../assets/home/background-home-mobile.jpg";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0b0d17;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Home = () => {
  return <StyledHome>test</StyledHome>;
};

export default Home;
