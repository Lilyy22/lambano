import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TblContentSideBar = ({ title, link }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.hash);

  useEffect(() => {
    setCurrentPath(location.hash);
  }, [location]);

  return (
    <>
      <li className="box-border mb-2">
        <a
          href={link}
          className={`table-of-contents-link text-sm hover:text-gray-400 ${
            currentPath === link ? "text-gray-400" : ""
          }`}
        >
          {title}
        </a>
      </li>
    </>
  );
};

export default TblContentSideBar;
