import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Sidebar from "./Sidebar";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import iconLogo from "../../assets/shared/logo.svg";

const StyledNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0px 24px;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const StyledLinkList = styled.div`
  /* display: none; */

  @media screen {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;
const NavbarLink = styled(NavLink)``;

const MenuIconOpen = styled(NavLink)`
  width: 24px;
  height: 21px;
`;
const Hamburger = styled.img`
  width: 24px;
  height: 21px;
`;

const Navbar = () => {
  const [sideBarStatus, setSidebarStatus] = useState(false);
  const showSidebar = () => setSidebarStatus(!sideBarStatus);

  return (
    <>
      <StyledNavbar>
        <Icon src={iconLogo} />
        <StyledLinkList>
          <NavbarLink to="home">Home</NavbarLink>
          <NavbarLink to="destination">Destination</NavbarLink>
          <NavbarLink to="crew">Crew</NavbarLink>
          <NavbarLink to="technology">Technology</NavbarLink>
        </StyledLinkList>
        <MenuIconOpen to="#" onClick={showSidebar}>
          <Hamburger src={iconHamburger} />
          {console.log(sideBarStatus)}
        </MenuIconOpen>
      </StyledNavbar>
      <Sidebar sideBarStatus={sideBarStatus} showSidebar={showSidebar} />
    </>
  );
};

export default Navbar;
