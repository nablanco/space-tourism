import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavData from "./navData";
import iconClose from "../../assets/shared/icon-close.svg";

const StyledSidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 254px;
  height: 100vh;
  padding-top: 33.95px;
  padding-left: 32px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  position: fixed;
  top: 0;
  right: ${({ sidebarStatus }) => (sidebarStatus ? "0%" : "-100%")};
  transition: 0.6s;
  z-index: 99;
`;
const MenuIconClose = styled(NavLink)`
  display: flex;
  width: inherit;
  justify-content: flex-end;
  margin-bottom: 65px;
`;
const StyledCloseIcon = styled.img`
  margin-right: 26.45px;
  width: 19px;
  height: 19px;
`;
const MenuItemLink = styled(NavLink)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: var(--text-primary);
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 32px;
  width: 250px;
  height: 31px;
  &:hover {
    border-right: 4px solid var(--text-primary);
  }
`;
const ItemNumber = styled.div`
  margin-right: 11px;
  font-weight: 700;
`;
const ItemName = styled.div`
  font-weight: 400;
`;

const Sidebar = ({ sideBarStatus, showSidebar, setPageBackground }) => {
  const handleClick = (event, index) => {
    setPageBackground(index);
    showSidebar();
  };
  return (
    <StyledSidebar sidebarStatus={sideBarStatus}>
      <MenuIconClose to="#" onClick={showSidebar}>
        <StyledCloseIcon src={iconClose} />
      </MenuIconClose>
      {NavData.map((item, index) => {
        return (
          <MenuItemLink
            to={item.path}
            onClick={(event) => handleClick(event, index)}
            key={item.name}
          >
            <ItemNumber>{item.number}</ItemNumber>
            <ItemName>{item.name}</ItemName>
          </MenuItemLink>
        );
      })}
    </StyledSidebar>
  );
};

export default Sidebar;
