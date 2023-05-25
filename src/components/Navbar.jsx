import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const handleClassesClick = (nav) => {
  if (nav.classes) {
    setActive(nav.title);
    setSubmenuVisible(!submenuVisible);
  } else {
    setActive(nav.title);
    setSubmenuVisible(false);
  }
};

const Navbar = ({ onYearSelect }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="title text-gradient" onClick={() => setActive("Home")}>
      <Link to="/about">
          <h1>
              <span className="title-bold">
              Interactive
              </span>Album
          </h1>
          <h2 className="subtitle">
            {" "}
            Theoretical Backgrounds of Audio and Graphics
          </h2>
      </Link>
      </div>

      {/* Desktop Navbar */}
      <ul className="list-none sm:flex hidden justify-end flex-1 navbar-desktop">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-[16px] text-gradient underline-on-hover text-white nav-item ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            onMouseEnter={() => nav.classes && setSubmenuVisible(true)}
            onMouseLeave={() => nav.classes && setSubmenuVisible(false)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
            {nav.classes && submenuVisible && (
              <ul className="list-none mt-2 p-4 submenu-text justify-start desktop-menu">
                {nav.classes.map((year) => (
                  <li
                    key={year}
                    className="cursor-pointer text-[16px] mb-2 last:mb-0 submenu-text"
                    onClick={() => {
                      console.log(year);
                      onYearSelect(year);
                    }}
                  >
                    {/* Link to AlbumDetailPage for selected year */}
                    <Link to={`/albums/${year}`}>{year}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>


      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain menu-icon"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="mobile-menu-container">
            <div className="mobile-menu">
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => handleClassesClick(nav)}
                  >
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                    {nav.classes && submenuVisible && active === nav.title && (
                      <div>
                        <ul className="list-none mt-2 bg-black-gradient text-dimWhite rounded-xl p-4">
                          {nav.classes.map((year, idx) => (
                            <li key={year} className="cursor-pointer text-[16px] mb-2 last:mb-0">
                              <Link
                                to={year === "All Classes" ? `/classes` : `/albums/${year}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (year !== "All Classes") {
                                    onYearSelect(year);
                                  }
                                }}
                              >
                                {year}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// import { useState } from "react";
// import { close, logo, menu, waverylogo, wavery01 } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = ({ onYearSelect }) => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);
//   const [submenuVisible, setSubmenuVisible] = useState(false);

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       <div className="title text-gradient">
//         <h1>
//           <span className="title-bold">Interactive</span> Album
//         </h1>
//         <h2 className="subtitle">
//           {" "}
//           Theoretical Backgrounds in Audio and Graphics
//         </h2>
//       </div>

//       <ul className="list-none sm:flex hidden justify-end flex-1 navbar-desktop w-full">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`cursor-pointer text-[16px] text-gradient underline-on-hover text-white nav-item ${
//               active === nav.title ? "text-white" : "text-dimWhite"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//             onMouseEnter={() => nav.classes && setSubmenuVisible(true)}
//             onMouseLeave={() => nav.classes && setSubmenuVisible(false)}
//           >
//             <a href={`${nav.id}`}>{nav.title}</a>
//             {nav.classes && submenuVisible && (
//               <ul className="list-none mt-2 p-4 submenu-text justify-start desktop-menu">
//                 {nav.classes.map((year) => (
//                   // <li key={year} className="cursor-pointer text-[16px] mb-2 last:mb-0 submenu-text">
//                   //   <a href={`#class-${year}`}>{year}</a>
//                   // </li>
//                   <li
//                     key={year}
//                     className="cursor-pointer text-[16px] mb-2 last:mb-0 submenu-text"
//                     onClick={() => {
//                       console.log(year);
//                       onYearSelect(year);
//                     }
//                     } // Call the onYearSelect function with the year
//                   >
//                     <a href={`#class-${year}`}>{year}</a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

      // <div className="sm:hidden flex   items-center">
      //   <img
      //     src={toggle ? close : menu}
      //     alt="menu"
      //     className="w-[28px] h-[28px] object-contain menu-icon"
      //     onClick={() => setToggle(!toggle)}
      //   />

      //   {toggle && (
      //     <div className="mobile-menu-container">
      //       <div className="mobile-menu">
      //         <ul className="list-none flex justify-end items-start flex-1 flex-col">
      //           {navLinks.map((nav, index) => (
      //             <li
      //               key={nav.id}
      //               className={`cursor-pointer text-[16px] ${
      //                 active === nav.title ? "text-white" : "text-dimWhite"
      //               } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
      //               onClick={() => setActive(nav.title)}
      //             >
      //               <a href={`${nav.id}`}>{nav.title}</a>
      //               {nav.classes && (
      //                 <div
      //                   onMouseEnter={() => setSubmenuVisible(true)}
      //                   onMouseLeave={() => setSubmenuVisible(false)}
      //                 >
      //                   <ul className="list-none mt-2 bg-black-gradient text-dimWhite rounded-xl p-4">
      //                     {nav.classes.map((year) => (
      //                       <li key={year} className="cursor-pointer text-[16px] mb-2 last:mb-0">
      //                         <a href={`#class-${year}`}>{year}</a>
      //                       </li>
      //                     ))}
      //                   </ul>
      //                 </div>
      //               )}
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     </div>
      //   )}
      // </div>
//     </nav>
//   );
// };

// export default Navbar;



// ------------------------------------------------------------

      {/* Mobile Navbar */}
      {/* <div className="sm:hidden flex   items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain menu-icon"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="mobile-menu-container">
            <div className="mobile-menu">
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                    {nav.classes && (
                      <div
                        onMouseEnter={() => setSubmenuVisible(true)}
                        onMouseLeave={() => setSubmenuVisible(false)}
                      >
                        <ul className="list-none mt-2 bg-black-gradient text-dimWhite rounded-xl p-4">
                          {nav.classes.map((year) => (
                            <li key={year} className="cursor-pointer text-[16px] mb-2 last:mb-0">
                              <a href={`#class-${year}`}>{year}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div> */}
      {/* <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain menu-icon"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="mobile-menu-container">
            <div className="mobile-menu">
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => handleClassesClick(nav)}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                    {nav.classes && submenuVisible && (
                      <div
                        onMouseEnter={() => setSubmenuVisible(true)}
                        onMouseLeave={() => setSubmenuVisible(false)}
                      >
                        <ul className="list-none mt-2 bg-black-gradient text-dimWhite rounded-xl p-4">
                          {nav.classes.map((year, idx) => (
                            <li key={year} className="cursor-pointer text-[16px] mb-2 last:mb-0">
                              <a
                                href={year === "All Classes" ? `/classes` : `#class-${year}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (year !== "All Classes") {
                                    onYearSelect(year);
                                  }
                                }}
                              >
                                {year}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div> */}