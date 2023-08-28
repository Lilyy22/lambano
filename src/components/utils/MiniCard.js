import React from "react";
import { MdEmail } from "react-icons/md";

const MiniCard = () => {
  return (
    <>
      <div className="ml-auto rounded-xl flex gap-6 bg-[#293041] border-t border-[#434959] py-6 px-2 md:p-6 md:w-96">
        <div className="bg-gray-600 rounded-full  w-16 h-16 p-4">
          <MdEmail size={30} />
        </div>
        <ul className="text-sm md:text-base">
          <li>info@Lambanometals.com</li>
          <li>support@Lambanometals.com</li>
        </ul>
      </div>
    </>
  );
};

export default MiniCard;
