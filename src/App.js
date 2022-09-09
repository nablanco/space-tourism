import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import image from "./assets/home/background-home-mobile.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0px;
    padding: 0px;
    color: var(--text-primary);
    font-family: 'Barlow Condensed', sans-serif;
    --main-font: 'Barlow Condensed', sans-serif;
    --body-font: 'Bellefair', serif;
    --text-primary: #FFFFFF;
    --text-secondary: #D0D6F9;
    --text-tertiary: #0b0d17;
  }
`;
const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0b0d17;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
`;

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </StyledApp>
  );
};

export default App;
