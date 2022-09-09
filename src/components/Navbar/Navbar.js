import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

const StyledNavbar = styled.nav``;

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <Link to="home">Home</Link>
        <Link to="destination">Destination</Link>
        <Link to="crew">Crew</Link>
        <Link to="technology">Technology</Link>
      </StyledNavbar>
      <Sidebar />
    </>
  );
};

export default Navbar;
