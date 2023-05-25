import React, { useState } from "react";
// import { sideBarLinks } from "../constants";


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(sideBarLinks[0]);

  return (
    <aside className="sidebar">
      <ul className="list-none flex flex-col justify-end">
        {sideBarLinks.map((link) => (
          <li
            key={link}
            className={`cursor-pointer  ${ //font-poppins font-normal text-2xl
              activeLink === link ? "text-white" : "text-gray-500"
            } mr-10`}
            onClick={() => setActiveLink(link)}
          >
            {link}{" "}
            {activeLink ===  link && <span className="text-gradient"></span>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
