import React from "react";

const MediaCard = ({ title, body, leftMargin, children }) => {
  return (
    <>
      <div
        className={`w-[90%] mb-4 text-left px-8 py-4 bg-gray-200 border shadow rounded-xl ${
          leftMargin ? " -ml-10" : ""
        }`}
      >
        {children}
        <h1 className="font-bold mb-1">{title}</h1>
        <p className="text-gray-400">{body}</p>
      </div>
    </>
  );
};

export default MediaCard;
