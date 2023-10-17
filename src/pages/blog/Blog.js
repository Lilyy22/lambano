import React from "react";
import { blogdata } from "../../data/data";
import BlogCard from "../../components/utils/BlogCard";
import AppLayout from "../../components/Layout/AppLayout";

export const Blog = () => {
  return (
    <>
      <AppLayout>
        <main className="bg-custom-white-500">
          <div className="py-12 text-center">
            <h1 className="text-3xl font-bold lg:text-4xl">Explore!</h1>
            <p className="text-gray-500 mt-1">
              Learn about minerals and mining industeries.
            </p>
          </div>

          <div className="max-w-7xl md:mx-auto flex flex-wrap pb-32">
            <div className="w-full px-2 lg:px-6">
              <div className="py-4 w-full roundex-xl border-b border-gray-400/50">
                <div className="">
                  <ul className="flex justify-start">
                    <li className="hover:bg-gray-200 px-4 py-1 rounded-2xl after:w-24 after:bg-red-500 after:py-12">
                      something
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-1 rounded-2xl">
                      something
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-1 rounded-2xl">
                      something
                    </li>
                    <li className="hover:bg-gray-200 px-4 py-1 rounded-2xl">
                      something
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="grid md:grid-cols-3
               gap-8 mx-auto pt-10"
              >
                {blogdata.map(
                  ({
                    img,
                    title,
                    i,
                    body,
                    category,
                    date,
                    author,
                    authorPosition,
                  }) => {
                    return (
                      <BlogCard
                        img={img}
                        title={title}
                        key={i}
                        body={body}
                        category={category}
                        date={date}
                        author={author}
                        authorPosition={authorPosition}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </main>
      </AppLayout>
    </>
  );
};
