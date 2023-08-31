import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { RiWhatsappFill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AppLayout = ({ children }) => {
  const [chatCard, setChatCard] = useState(false);
  setTimeout(() => {
    setChatCard(true);
  }, 5000);

  return (
    <>
      {chatCard && (
        <div className="relative">
          <Link
            to=""
            className="bg-gray-100 border-gray-800 rounded-xl fixed p-2 md:px-6 md:py-4 bottom-5 right-5 w-72 z-50"
          >
            <span
              className="float-right transition-all"
              onClick={() => {
                setChatCard(false);
              }}
            >
              <RiCloseFill size={20} className="text-gray-600" />
            </span>
            <div className="flex">
              <RiWhatsappFill
                size={30}
                className="text-custom-purple-500 mr-2"
              />
              <h4 className="font-bold text-lg capitalize">Chat on whatsapp</h4>
            </div>
          </Link>
        </div>
      )}
      <Header />
      <main className="font-tailwind bg-custom-dark-500">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
