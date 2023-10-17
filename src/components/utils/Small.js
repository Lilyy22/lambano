import React from "react";

const Small = ({ text, light }) => {
  return (
    <>
      <small
        className={`text-purple-500 px-4 py-1 rounded-xl capitalize shadow ${
          light ? "bg-gray-200" : "bg-gray-800"
        }`}
      >
        {text}
      </small>
    </>
  );
};

export default Small;
