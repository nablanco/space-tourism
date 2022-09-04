import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  :root {
    display: block;
    margin: 0px;
    padding: 0px;
    --text-primary: #FFFFFF;
    --text-secondary: #D0D6F9;
    --text-tertiary: #0b0d17;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
