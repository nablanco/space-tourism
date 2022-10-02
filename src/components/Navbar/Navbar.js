import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Sidebar from "./Sidebar";
import NavData from "./navData";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import iconLogo from "../../assets/shared/logo.svg";

const StyledNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0px 24px;

  @media screen and (min-width: 768px) {
    padding: 0 0 0 39px;
  }
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
const StyledLinkList = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 356px;
    height: 57px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    padding: 39px 48px 0px 48px;
  }
`;
const NavbarLink = styled(NavLink)`
  font-family: -var(--main-font);
  color: var(--text-primary);
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  height: 54px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid var(--text-primary);
  }
`;

const MenuIconOpen = styled(NavLink)`
  width: 24px;
  height: 21px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Hamburger = styled.img`
  width: 24px;
  height: 21px;
`;

const Navbar = ({ background, setPageBackground }) => {
  const [sideBarStatus, setSidebarStatus] = useState(false);
  const showSidebar = () => setSidebarStatus(!sideBarStatus);

  return (
    <>
      <StyledNavbar>
        <Icon src={iconLogo} />
        <StyledLinkList>
          {NavData.map((item, index) => {
            return (
              <NavbarLink
                to={item.path}
                onClick={() => setPageBackground(index)}
                key={index}
              >
                {item.name}
              </NavbarLink>
            );
          })}
        </StyledLinkList>
        <MenuIconOpen to="#" onClick={showSidebar}>
          <Hamburger src={iconHamburger} />
        </MenuIconOpen>
      </StyledNavbar>
      <Sidebar
        sideBarStatus={sideBarStatus}
        showSidebar={showSidebar}
        setPageBackground={setPageBackground}
      />
    </>
  );
};

export default Navbar;
