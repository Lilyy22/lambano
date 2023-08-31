import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const Accordion = ({ question, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        className="w-full bg-[#293041]/80 rounded-xl my-1 py-3 px-3 text-left text-lg border border-gray-800 text-slate-900"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span className="tansition-all duration-1000 ease-in-out flex justify-between text-gray-300">
          {question}
          {isActive ? (
            <IoIosRemove
              size={22}
              className="my-auto text-custom-purple-500 tansition-all duration-1000 ease-in-out"
            />
          ) : (
            <IoIosAdd
              size={22}
              className="my-auto text-custom-purple-500 tansition-all duration-1000 ease-in-out"
            />
          )}
        </span>
        {isActive && (
          <div className="p-3 transition-all duration-1000 ease-in-out my-3 text-slate-500">
            {content}
          </div>
        )}
      </button>
    </>
  );
};
