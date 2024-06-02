import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Navbar } from "./Navbar";
import image from "../images/bgimage.jpg";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div
      className="bg-cover  bg-no-repeat relative bg-center z-0 h-screen flex flex-col space-y-8 "
      style={{ backgroundImage: `url(${image})` }}
    >
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
