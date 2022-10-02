import React from "react";
import { useState } from "react";
import styled from "styled-components";

import assetData from "../../assets/asset_data";
const destinationData = assetData[0]["destinations"];

const DestinationBackground = styled.div`
  width: 375px;
  height: 825px;
`;

const StyledDestination = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 32px;
`;
const HeaderNumber = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  opacity: 0.25;
  margin-right: 18px;
`;
const HeaderText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
`;
const DestinationImage = styled.img`
  height: 170px;
  width: 170px;
  margin-bottom: 26px;
`;
const DestinationSelection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 238px;
  height: 28px;
  margin-bottom: 10px;
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
    border-bottom: 3px solid var(--text-primary);
    color: var(--text-primary);
  }

  border-bottom: ${(props) =>
    props.isActive ? "3px solid var(--text-primary)" : undefined};
  color: ${(props) => (props.isActive ? "var(--text-primary)" : undefined)}; ;
`;
const DestinationTitle = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-align: center;
  text-transform: uppercase;
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
`;
const Divider = styled.div`
  width: 327px;
  border-top: 1px solid #383b4b;
  margin-bottom: 32px;
`;
const DestinationStatistic = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  height: 61px;
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
`;
const StatisticValue = styled.div`
  font-family: var(--special-font);
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
`;

const Destination = () => {
  const [destinationIndex, setDestinationIndex] = useState(0);

  return (
    <DestinationBackground>
      <StyledDestination>
        <Header>
          <HeaderNumber>01</HeaderNumber>
          <HeaderText>PICK YOUR DESINATION</HeaderText>
        </Header>
        <DestinationImage
          src={destinationData[destinationIndex]["images"]["webp"]}
        />
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
        <Divider />
        <DestinationStatistic>
          <StatisticTitle>Avg. Distance</StatisticTitle>
          <StatisticValue>
            {destinationData[destinationIndex]["distance"]}
          </StatisticValue>
        </DestinationStatistic>
        <DestinationStatistic>
          <StatisticTitle>Est. Travel Time</StatisticTitle>
          <StatisticValue>
            {destinationData[destinationIndex]["travel"]}
          </StatisticValue>
        </DestinationStatistic>
      </StyledDestination>
    </DestinationBackground>
  );
};

export default Destination;
