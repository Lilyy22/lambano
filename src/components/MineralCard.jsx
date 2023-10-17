import React from "react";

const MineralCard = ({ product, text, photo }) => {
  return (
    <>
      <div className="w-[80%] mx-auto md:w-full border-t border-gray-200 bg-gray-100/70 rounded-xl">
        <img
          src={photo}
          alt="mineral"
          className="rounded-t-xl w-full h-36 object-cover"
        />
        <div className="p-4">
          <dt className="font-bold">{product}</dt>
          <dd className="mt-1 text-sm text-gray-500">{text}</dd>
        </div>
      </div>
    </>
  );
};

export default MineralCard;
