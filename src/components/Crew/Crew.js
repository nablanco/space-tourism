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
const CrewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 327px;
  height: 223px;
  margin-bottom: 26px;
  object-fit: contain;
  border-bottom: 1px solid #383b4b;
`;
const CrewImage = styled.img`
  height: 222px;
  object-fit: contain;
`;
const CrewInfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 327px;
`;
const CrewIndicatorContainer = styled.div`
  display: flex;
  flex-basis: row nowrap;
  justify-content: space-between;
  width: 88px;
  margin-bottom: 32px;
`;
const CrewIndicator = styled.button`
  width: 10px;
  height: 10px;
  padding: 0px;
  border-radius: 50%;
  border: transparent;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.17;
  opacity: ${(props) => (props.isActive ? 1 : undefined)};

  &:hover {
    opacity: 1;
  }
`;
const CrewTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
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
`;
const CrewBio = styled.div`
  font-family: var(--body-font);
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
`;

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <StyledCrew>
      <Header>
        <HeaderNumber>02</HeaderNumber>
        <HeaderText>MEET YOUR Crew</HeaderText>
      </Header>
      <CrewImageContainer>
        <CrewImage src={crewData[crewIndex]["images"]["webp"]} />
      </CrewImageContainer>
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
    </StyledCrew>
  );
};

export default Crew;
