import React from "react";

const Small = ({ text }) => {
  return (
    <>
      <small className="text-purple-500 bg-gray-800 px-4 py-1 rounded-xl capitalize">{text}</small>
    </>
  );
};

export default Small;
