import React from "react";

const MediaCard = ({ title, body, img }) => {
  return (
    <>
      <div className="w-full md:w-[23%] text-center mb-6">
        <img
          loading="lazy"
          src={img}
          alt="happy african labors"
          className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border border-gray-500"
        />
        <h1 className="font-bold text-xl capitalize mb-2">{title}</h1>
        <p className="text-gray-500 text-sm px-4 max-w-sm mx-auto">{body}</p>
      </div>
    </>
  );
};

export default MediaCard;
