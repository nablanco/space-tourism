import React from "react";
import { useState } from "react";
import styled from "styled-components";

import assetData from "../../assets/asset_data";
const crewData = assetData[1]["crew"];

const StyledCrew = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;
const Header = styled.div`
  order: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    order: 1;
    align-self: flex-start;
    margin: 40px 0px 60px 38.5px;
  }

  @media screen and (min-width: 1440px) {
    margin: 76px 0px 0px 166.5px;
  }
`;
const HeaderNumber = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  opacity: 0.25;
  margin-right: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
  }
`;
const HeaderText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
  }
`;
const ContentContainer = styled.div`
  order: 2;
  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-flow: column nowrap;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100%;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const LeftColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    align-self: flex-start;
    height: 406px;
    margin-top: 154px;
    margin-left: 165px;
    margin-bottom: 94px;
  }
`;
const RightColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    height: 100%;
    align-self: flex-end;
  }
`;
const CrewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 327px;
  height: 223px;
  margin-bottom: 26px;
  object-fit: contain;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (min-width: 768px) {
    order: 3;
    height: 532px;
    margin-bottom: 0px;
    border-bottom: none;
  }

  @media screen and (min-width: 1440px) {
    height: 650px;
    margin-left: 105px;
    margin-bottom: 0px;
  }
`;
const CrewImage = styled.img`
  height: 222px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    height: 532px;
  }

  @media screen and (min-width: 1440px) {
    height: 650px;
  }
`;
const CrewInfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 327px;

  @media screen and (min-width: 768px) {
    flex-flow: column-reverse nowrap;
    order: 2;
    width: 592px;
  }

  @media screen and (min-width: 1440px) {
    width: 615px;
    height: inherit;
    align-items: flex-start;
  }
`;
const CrewIndicatorContainer = styled.div`
  display: flex;
  flex-basis: row nowrap;
  justify-content: space-between;
  width: 88px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
const CrewIndicator = styled.button`
  width: 10px;
  height: 10px;
  padding: 0px;
  border-radius: 50%;
  border: transparent;
  background: #ffffff;
  mix-blend-mode: normal;
  cursor: pointer;
  opacity: 0.17;
  opacity: ${(props) => (props.isActive ? 1 : undefined)};

  &:hover {
    opacity: 0.5;
  }
  @media screen and {
    width: 15px;
    height: 15px;
  }
`;
const CrewTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;
const CrewRole = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 37px;
  }
`;
const CrewName = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 46px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 56px;
    line-height: 64px;
  }
`;
const CrewBio = styled.div`
  font-family: var(--body-font);
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
    text-align: start;
    width: 444px;
    margin-bottom: 120px;
  }
`;

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <StyledCrew>
      <Header>
        <HeaderNumber>02</HeaderNumber>
        <HeaderText>MEET YOUR Crew</HeaderText>
      </Header>
      <ContentContainer>
        <LeftColumnContainer>
          <CrewInfoContainer>
            <CrewIndicatorContainer>
              {crewData.map((item, index) => {
                return (
                  <CrewIndicator
                    onClick={() => setCrewIndex(index)}
                    key={item.name}
                    isActive={crewIndex === index ? true : false}
                    to={index + 1}
                  />
                );
              })}
            </CrewIndicatorContainer>
            <CrewTextContainer>
              <CrewRole>{crewData[crewIndex]["role"]}</CrewRole>
              <CrewName>{crewData[crewIndex]["name"]}</CrewName>
              <CrewBio>{crewData[crewIndex]["bio"]}</CrewBio>
            </CrewTextContainer>
          </CrewInfoContainer>
        </LeftColumnContainer>
        <RightColumnContainer>
          <CrewImageContainer>
            <CrewImage src={crewData[crewIndex]["images"]["webp"]} />
          </CrewImageContainer>
        </RightColumnContainer>
      </ContentContainer>
    </StyledCrew>
  );
};

export default Crew;
