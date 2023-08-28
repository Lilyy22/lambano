import React from "react";
import { OutlineButton } from "../components/utils/Button";

const NotFound = () => {
  return (
    <>
      <div className="h-screen m-auto bg-custom-dark-500">
        <h1 className="font-bold text-5xl text-custom-white-500 text-center pt-20 pb-8">
          404
        </h1>
        <OutlineButton text="go home" goto="/" margin="mx-auto" />
      </div>
    </>
  );
};

export default NotFound;
