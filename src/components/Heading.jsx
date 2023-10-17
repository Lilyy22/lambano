import React from "react";
import Small from "./utils/Small";

export const HeadingCenter = ({ intro, title, introLight, headingLight }) => {
  return (
    <>
      <div className="text-center">
        <Small text={intro} light={introLight} />
        <h1
          className={`font-extrabold text-3xl xl:text-4xl capitalize mt-2 ${
            headingLight ? "text-gray-200" : "text-gray-900"
          }`}
        >
          {title}
        </h1>
      </div>
    </>
  );
};

export const HeadingLeft = ({ intro, title, introLight, headingLight }) => {
  return (
    <>
      <Small text={intro} light={introLight} />
      <h1
        className={`font-extrabold text-3xl xl:text-4xl text-left capitalize mt-2 ${
          headingLight ? "text-gray-200" : "text-gray-900"
        }`}
      >
        {title}
      </h1>
    </>
  );
};
