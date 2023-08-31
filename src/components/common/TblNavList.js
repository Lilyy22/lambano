import React from "react";

const TblNavList = ({ url, title }) => {
  return (
    <>
      <li className="box-border mb-2">
        <a
          href={url}
          className={
            "table-of-contents-link hover:text-gray-400 " +
            (window.location.hash === { url } ? "text-gray-400" : "")
          }
        >
          {title}
        </a>
      </li>
    </>
  );
};

export default TblNavList;
