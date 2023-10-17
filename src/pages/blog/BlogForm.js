import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { useState } from "react";

export const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <main className="bg-white py-10 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <form>
            <div className="flex">
              <div className="my-2 w-full">
                <label
                  for="BlogTitle"
                  className="font-medium dark:text-gray-300"
                >
                  Blog Title:
                </label>
                <input
                  id="BlogTitle"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border-2 outline-none rounded-xl mt-2 dark:bg-gray-800 dark:border-t dark:border-gray-700 dark:text-gray-300"
                  placeholder="eg: Expensive minerals around the world."
                />
              </div>
              <div className="my-2 w-full pl-4">
                <label
                  for="Category"
                  className="font-medium dark:text-gray-300"
                >
                  Category:
                </label>
                <select
                  id="Category"
                  className="w-full p-2 border-2 outline-none rounded-xl mt-2 dark:bg-gray-800 dark:border-t dark:border-gray-700 dark:text-gray-300"
                >
                  <option>--select category--</option>
                  <option>minerals</option>
                  <option>business</option>
                </select>
              </div>
            </div>
            <div className="my-2">
              <label for="body" className="font-medium dark:text-gray-300">
                Content:
              </label>
              <Editor
                id="body"
                initialValue="<p>Type blog content here.</p>"
                init={{
                  skin: window.matchMedia("(prefers-color-scheme: dark)")
                    .matches
                    ? "oxide-dark"
                    : "oxide",
                  content_css: window.matchMedia("(prefers-color-scheme: dark)")
                    .matches
                    ? "dark"
                    : "default",
                  height: 400,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "undo redo | bullet list | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | ",
                }}
                //   onEditorChange={handleEditorChange}
              />
            </div>
            <div className="mt-4">
              <div>
                <input
                  type="checkbox"
                  id="commentEnabled"
                  className="h-3 w-3 accent-custom-purple-500"
                />
                <label
                  for="commentEnabled"
                  className="dark:text-gray-400 font-medium pl-1"
                >
                  Users can comment on this blog.
                </label>
              </div>
            </div>
            <div className="my-4">
              <label for="PostTime" className="font-medium dark:text-gray-300">
                When should the Post Be Published?
              </label>
              <div className="flex gap-4 my-2" id="PostTime">
                <div>
                  <input
                    type="radio"
                    id="postnow"
                    name="PostTime"
                    className="h-3.5 w-3.5 bg-gray-200 accent-custom-purple-500"
                  />
                  <label
                    for="postnow"
                    className="dark:text-gray-400 font-medium pl-1"
                  >
                    Now
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="postlater"
                    name="PostTime"
                    className="h-3.5 w-3.5 bg-gray-200 accent-custom-purple-500"
                  />
                  <label
                    for="postlater"
                    className="dark:text-gray-400 font-medium pl-1"
                  >
                    Later
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-custom-purple-500 w-full mt-4 p-3 rounded-xl"
            >
              Create Post
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
