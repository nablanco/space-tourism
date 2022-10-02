import React from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

const StyledHome = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const HomeTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 48px 24px 47px 24px;

  @media screen and (min-width: 768px) {
    width: 450px;
    margin-top: 106px;
  }
`;
const OpeningText = styled.div`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2.7px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
const BoldText = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 100px;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 150px;
    line-height: 150px;
  }
`;
const ParagraphText = styled.div`
  color: var(--text-secondary);
  font-family: var(--body-font);
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 156px;
  }
`;
const ExploreButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: var(--text-primary);
  border-radius: 50%;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 242px;
    height: 242px;
    margin-bottom: 90px;
  }
`;
const ExploreButtonText = styled.div`
  font-family: var(--special-font);
  color: var(--text-tertiary);
  letter-spacing: 1.5px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
  }
`;

const Home = () => {
  const [pageBackground, setPageBackground] = useOutletContext();

  return (
    <StyledHome>
      <HomeTextContainer>
        <OpeningText>SO, YOU WANT TO TRAVEL TO</OpeningText>
        <BoldText>SPACE</BoldText>
        <ParagraphText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </ParagraphText>
      </HomeTextContainer>
      <ExploreButton onClick={() => setPageBackground(0)} to="/destination">
        {console.log(pageBackground)}
        <ExploreButtonText>EXPLORE</ExploreButtonText>
      </ExploreButton>
    </StyledHome>
  );
};

export default Home;
