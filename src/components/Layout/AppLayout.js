import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="font-tailwind bg-custom-dark-500">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
