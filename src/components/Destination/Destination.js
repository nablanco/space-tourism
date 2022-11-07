import React from "react";
import { useState } from "react";
import styled from "styled-components";

import assetData from "../../assets/asset_data";
const destinationData = assetData[0]["destinations"];

const StyledDestination = styled.div`
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
    margin: 76px 0px 64px 166.5px;
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
    flex-flow: row nowrap;
    margin-bottom: 112px;
  }
`;
const LeftColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-left: 230px;
  }
`;
const RightColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 445px;
    align-items: flex-start;
    margin-right: 163px;
  }
`;
const DestinationImage = styled.img`
  height: 170px;
  width: 170px;
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    height: 300px;
    width: 300px;
    margin-bottom: 53px;
  }

  @media screen and (min-width: 1440px) {
    height: 445px;
    width: 445px;
    margin-bottom: 0px;
  }
`;
const DestinationSelection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 238px;
  height: 28px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 285.5px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    width: 286px;
    height: 34px;
    margin-bottom: 37px;
  }
`;
const DestinationButton = styled.a`
  font-family: var(--text-primary);
  color: var(--text-secondary);
  background-color: transparent;
  border: transparent;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;

  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    color: var(--text-primary);
  }

  border-bottom: ${(props) =>
    props.isActive ? "3px solid var(--text-primary)" : undefined};
  color: ${(props) => (props.isActive ? "var(--text-primary)" : undefined)};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
const DestinationTitle = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 92px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 115px;
    margin-bottom: 14px;
  }
`;
const DesinationText = styled.div`
  font-family: var(--body-font);
  color: var(--text-secondary);
  width: 327px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    text-align: start;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 54px;
  }
`;
const StatisticsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-top: 32px;
  width: 327px;
  border-top: 1px solid #383b4b;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 443px;
    padding: 28px 65.5px 0 65.5px;
  }

  @media screen and (min-width: 1440px) {
    width: 445px;
    padding: 28px 0 0 0;
  }
`;
const Statistic = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 216px;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
    align-items: flex-start;
  }
`;
const StatisticTitle = styled.div`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
  }
`;
const StatisticValue = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
  }
`;

const Destination = () => {
  const [destinationIndex, setDestinationIndex] = useState(0);

  return (
    <StyledDestination>
      <Header>
        <HeaderNumber>01</HeaderNumber>
        <HeaderText>PICK YOUR DESTINATION</HeaderText>
      </Header>
      <ContentContainer>
        <LeftColumnContainer>
          <DestinationImage
            src={destinationData[destinationIndex]["images"]["webp"]}
          />
        </LeftColumnContainer>
        <RightColumnContainer>
          <DestinationSelection>
            {destinationData.map((item, index) => {
              return (
                <DestinationButton
                  onClick={() => setDestinationIndex(index)}
                  key={item.name}
                  isActive={destinationIndex === index ? true : false}
                  to="#"
                >
                  {item.name}
                </DestinationButton>
              );
            })}
          </DestinationSelection>
          <DestinationTitle>
            {destinationData[destinationIndex]["name"]}
          </DestinationTitle>
          <DesinationText>
            {destinationData[destinationIndex]["description"]}
          </DesinationText>
          <StatisticsContainer>
            <Statistic>
              <StatisticTitle>Avg. Distance</StatisticTitle>
              <StatisticValue>
                {destinationData[destinationIndex]["distance"]}
              </StatisticValue>
            </Statistic>
            <Statistic>
              <StatisticTitle>Est. Travel Time</StatisticTitle>
              <StatisticValue>
                {destinationData[destinationIndex]["travel"]}
              </StatisticValue>
            </Statistic>
          </StatisticsContainer>
        </RightColumnContainer>
      </ContentContainer>
    </StyledDestination>
  );
};

export default Destination;
