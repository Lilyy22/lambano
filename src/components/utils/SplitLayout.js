import React from "react";
import { Link } from "react-router-dom";

const SplitLayout = ({ title, body, action, order, img, category }) => {
  return (
    <>
      <article className="max-w-sm py-20 mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <Link className={"relative block group " + order} href="#0">
          <div
            className="absolute inset-0 rounded-xl bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"
          ></div>
          <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <img
              className="rounded-xl absolute inset-0 w-full h-full object-cover brightness-75 contrast-100 transform hover:scale-105 transition duration-700 ease-out"
              src={img}
              width="540"
              height="303"
              alt="Lambano Service"
              loading="lazy"
            />
          </figure>
        </Link>
        <div>
          <header>
            <div className="mb-3">
              <ul className="flex flex-wrap text-xs font-medium -m-1">
                <li className="m-1">
                  <Link
                    className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    {category}
                  </Link>
                </li>
              </ul>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <Link
                className="hover:text-gray-100 transition duration-150 ease-in-out capitalize"
                href="#"
              >
                {title}
              </Link>
            </h3>
          </header>
          <p className="text-lg text-gray-400 flex-grow">{body}</p>
          <footer className="flex items-center mt-4">
            <div>
              <Link
                className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                href="#0"
              >
                {action}
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default SplitLayout;
