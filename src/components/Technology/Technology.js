import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import assetData from "../../assets/asset_data";
const technologyData = assetData[2]["technology"];

const StyledTechnology = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
    margin: 40px 0px 60px 38.5px;
  }

  @media screen and (min-width: 1440px) {
    margin: 76px 0px 26px 166.5px;
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 100%;
    flex-flow: row-reverse nowrap;
    margin-bottom: 101px;
  }
`;
const LeftColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-top: 111px;
    margin-left: 165px;
  }
`;
const RightColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
const TechnologyImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 170px;
  margin-bottom: 26px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 310px;
    margin-bottom: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 527px;
    margin-bottom: 0;
  }
`;
const TechnologyImage = styled.img`
  height: 170px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 310px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 527px;
  }
`;
const TechnologyInfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 327px;

  @media screen and (min-width: 768px) {
    width: 458px;
  }

  @media screen and (min-width: 1440px) {
    flex-flow: row nowrap;
    align-items: flex-start;
    width: 630px;
  }
`;
const TechnologyButtonContainer = styled.div`
  display: flex;
  flex-basis: row nowrap;
  justify-content: space-between;
  width: 152px;
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    width: 210px;
    margin-bottom: 44px;
  }

  @media screen and (min-width: 1440px) {
    flex-flow: column nowrap;
    width: auto;
    margin-right: 80px;
    margin-bottom: 44px;
  }
`;
const TechnologyButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: transparent;
  mix-blend-mode: normal;
  font-family: var(--special-font);
  font-style: normal;
  color: var(--text-primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1px;

  &:hover {
    border: 1px solid rgba(255, 255, 255);
  }

  color: var(${(props) => (props.isActive ? "--text-tertiary" : undefined)});
  background-color: ${(props) => (props.isActive ? "white" : undefined)};

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 78px;
    height: 78px;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 0px;
    margin-bottom: 32px;
  }
`;
const TechnologyTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 327px;

  @media screen and (min-width: 768px) {
    width: 458px;
  }

  @media screen and (min-width: 1440px) {
    width: 470px;
    align-items: flex-start;
  }
`;
const TechnologyStaticHeader = styled.div`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 2.3625px;
  margin-bottom: 9px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;
const TechnologyTerminology = styled.div`
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
    text-align: start;
  }
`;
const TechnologyDescription = styled.div`
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
    margin-bottom: 97px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 0px;
    text-align: start;
  }
`;

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [width]);

  const setImage = (width) => (width < 1440 ? "landscape" : "portrait");

  return (
    <StyledTechnology>
      <Header>
        <HeaderNumber>03</HeaderNumber>
        <HeaderText>SPACE LAUNCH 101</HeaderText>
      </Header>
      <ContentContainer>
        <RightColumnContainer>
          <TechnologyImageContainer>
            <TechnologyImage
              src={technologyData[technologyIndex]["images"][setImage(width)]}
            />
          </TechnologyImageContainer>
        </RightColumnContainer>
        <LeftColumnContainer>
          <TechnologyInfoContainer>
            <TechnologyButtonContainer>
              {technologyData.map((item, index) => {
                return (
                  <TechnologyButton
                    onClick={() => setTechnologyIndex(index)}
                    key={index}
                    isActive={technologyIndex === index ? true : false}
                    to="#"
                  >
                    {index + 1}
                  </TechnologyButton>
                );
              })}
            </TechnologyButtonContainer>
            <TechnologyTextContainer>
              <TechnologyStaticHeader>
                THE TERMINOLOGY...
              </TechnologyStaticHeader>
              <TechnologyTerminology>
                {technologyData[technologyIndex]["name"]}
              </TechnologyTerminology>
              <TechnologyDescription>
                {technologyData[technologyIndex]["description"]}
              </TechnologyDescription>
            </TechnologyTextContainer>
          </TechnologyInfoContainer>
        </LeftColumnContainer>
      </ContentContainer>
    </StyledTechnology>
  );
};

export default Technology;
