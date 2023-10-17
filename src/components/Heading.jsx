import React from "react";
import Small from "./utils/Small";

export const HeadingCenter = ({ intro, title }) => {
  return (
    <>
      <Small text={intro} />
      <h1 className="font-extrabold md:text-2xl xl:text-3xl text-gray-200 text-center capitalize mt-1">
        {title}
      </h1>
    </>
  );
};

export const HeadingLeft = ({ intro, title }) => {
  return (
    <>
      <Small text={intro} />
      <h1 className="font-extrabold md:text-2xl xl:text-3xl text-gray-200 text-left capitalize mt-1">
        {title}
      </h1>
    </>
  );
};
