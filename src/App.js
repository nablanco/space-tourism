import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import backgroundHomeMobile from "./assets/home/background-home-mobile.jpg";
import backgroundHomeTablet from "./assets/home/background-home-tablet.jpg";
import backgroundHomeDesktop from "./assets/home/background-home-desktop.jpg";
import backgroundDestinationMobile from "./assets/destination/background-destination-mobile.jpg";
import backgroundDestinationTablet from "./assets/destination/background-destination-tablet.jpg";
import backgroundDestinationDesktop from "./assets/destination/background-destination-desktop.jpg";
import backgroundCrewMobile from "./assets/crew/background-crew-mobile.jpg";
import backgroundCrewTablet from "./assets/crew/background-crew-tablet.jpg";
import backgroundCrewDesktop from "./assets/crew/background-crew-desktop.jpg";
import backgroundTechnologyMobile from "./assets/technology/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "./assets/technology/background-technology-tablet.jpg";
import backgroundTechnologyDesktop from "./assets/technology/background-technology-desktop.jpg";

const mobileBackgrounds = [
  backgroundHomeMobile,
  backgroundDestinationMobile,
  backgroundCrewMobile,
  backgroundTechnologyMobile,
];
const tabletBackgrounds = [
  backgroundHomeTablet,
  backgroundDestinationTablet,
  backgroundCrewTablet,
  backgroundTechnologyTablet,
];
const desktopBackgrounds = [
  backgroundHomeDesktop,
  backgroundDestinationDesktop,
  backgroundCrewDesktop,
  backgroundTechnologyDesktop,
];

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0px;
    padding: 0px;
    color: var(--text-primary);
    font-family: var(--main-font);
    --main-font: 'Barlow Condensed', sans-serif;
    --special-font: 'Bellefair', serif;
    --body-font: 'Barlow', sans-serif;
    --text-primary: #FFFFFF;
    --text-secondary: #D0D6F9;
    --text-tertiary: #0b0d17;
  }
`;
const StyledApp = styled.div`
  min-height: 100%;
  min-width: 375px;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0b0d17;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: url(${(props) => mobileBackgrounds[props.background]});

  @media screen and (min-width: 768px) {
    background-image: url(${(props) => tabletBackgrounds[props.background]});
  }

  @media screen and (min-width: 1080px) {
    background-image: url(${(props) => desktopBackgrounds[props.background]});
  }
`;

const App = () => {
  const [pageBackground, setPageBackground] = useState(0);

  return (
    <StyledApp background={pageBackground}>
      <GlobalStyle />
      <Navbar setPageBackground={setPageBackground} />
      <Outlet context={[pageBackground, setPageBackground]} />
    </StyledApp>
  );
};

export default App;
