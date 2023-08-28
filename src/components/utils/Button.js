import React from "react";
import { Link } from "react-router-dom";

export const SolidButton = ({ text, goto }) => {
  return (
    <>
      <Link
        to={goto}
        class="capitalize relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-custom-purple-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
      >
        <span class="relative text-base font-semibold text-white">{text}</span>
      </Link>
    </>
  );
};

export const OutlineButton = ({ text, goto }) => {
  return (
    <>
      <Link
        to={goto}
        class="mx-auto capitalize relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#293041]/80 before:border before:border-[#434959] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
      >
        <span class="relative text-base font-semibold text-white">{text}</span>
      </Link>
    </>
  );
};
