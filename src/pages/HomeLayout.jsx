import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
