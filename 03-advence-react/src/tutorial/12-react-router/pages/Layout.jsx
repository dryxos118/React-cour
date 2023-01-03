import React from "react";
import { Outlet } from "react-router-dom";
import StyledNav from "../components/StyledNav";

const Layout = () => {
  return (
    <>
      <StyledNav />
      <Outlet />
    </>
  );
};

export default Layout;
