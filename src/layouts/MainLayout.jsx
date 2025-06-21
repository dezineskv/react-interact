import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Cards from "../components/Cards";

// use outlet for the routes from app
const MainLayout = () => {
  return (
    <>
      <Nav />
      <Cards />
      <Outlet />
    </>
  );
};

export default MainLayout;
