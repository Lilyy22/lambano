import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  img,
  date,
  category,
  title,
  body,
  authorPosition,
  author,
}) => {
  return (
    <>
      <article className="flex max-w-xl flex-col items-start justify-between bg-slate-50/60 rounded-2xl bg-custom-white-500">
        <div class="w-full h-44 md:h-64 overflow-hidden rounded-t-2xl">
          <img
            className="w-full h-full rounded-t-2xl  object-cover shadow brightness-75 hover:scale-105 transition-all delay-75 duration-100 ease-out"
            src={img}
            alt="Blog"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">
              {date}
            </time>
            <button
              href="#"
              className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 bg-custom-purple-500/10"
            >
              {category}
            </button>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <button href="#">
                <span className="absolute" />
                {title}
              </button>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {body.length >= 100 ? body.substring(0, 100) + " ．．．" : body}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="relative mt-4 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />

              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">{author}</p>
                <p className="text-gray-600">{authorPosition}</p>
              </div>
            </div>
            <Link className="mt-auto text-xs font-medium text-custom-purple-500 hover:text-custom-gray-900">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.7em"
                viewBox="0 0 320 512"
                className="inline-block fill-custom-purple-500 pl-1"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
