import React, { useState, useEffect } from "react";
import { sketchInfo } from "../constants";
import { Link } from "react-router-dom";
import { AlbumDetailPage } from "../components";

const ClassesPage = () => {
  const years = [...new Set(sketchInfo.map((sketch) => sketch.year))].sort();
  const [filteredYear, setFilteredYear] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith("class-")) {
        setFilteredYear(hash.slice(6));
      } else {
        setFilteredYear(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredSketches =
    filteredYear === null
      ? sketchInfo
      : sketchInfo.filter((sketch) => sketch.year === filteredYear);

      return filteredYear ? (
        <AlbumDetailPage filteredSketches={filteredSketches} />
      ) : (
        <div className="classes-page">
          {years.map((year) => (
            <div key={year} className="year-section flex-container">
              <h2 className="year-title">{year}</h2>
              <div className="thumbnail-grid">
                {sketchInfo
                  .filter((sketch) => sketch.year === year)
                  .map((sketch) => (
                    <Link key={sketch.id} to={`/sketch-detail/${sketch.id}`}>
                      <div className="thumbnail-container">
                        <img
                          src={sketch.image}
                          alt={sketch.title}
                          className="thumbnail"
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      );
}

export default ClassesPage;


// import React from "react";
// import { sketchInfo } from "../constants";
// import { Link } from "react-router-dom";

// const ClassesPage = () => {
//   const years = [...new Set(sketchInfo.map((sketch) => sketch.year))].sort();

//   return (
//     <div className="classes-page">
//       {years.map((year) => (
//         <div key={year} className="year-section">
//           <h2>{year}</h2>
//           <div className="thumbnail-grid">
//             {sketchInfo
//               .filter((sketch) => sketch.year === year)
//               .map((sketch) => (
//                 <Link key={sketch.id} to={`/sketch-detail/${sketch.id}`}>
//                   <img
//                     src={sketch.image}
//                     alt={sketch.title}
//                     className="thumbnail"
//                   />
//                 </Link>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ClassesPage;

// import React from "react";
// 
// import { sketchInfo } from "../constants";
// import { Link } from "react-router-dom";

// const ClassesPage = () => {
//   const years = [...new Set(sketchInfo.map((sketch) => sketch.year))].sort();

//   return (
//     <div className="classes-page">
//       {years.map((year) => (
//         <div key={year} className="year-section flex-container">
//           <h2 className="year-title">{year}</h2>
//           <div className="thumbnail-grid">
//             {sketchInfo
//               .filter((sketch) => sketch.year === year)
//               .map((sketch) => (
//                 <Link key={sketch.id} to={`/sketch-detail/${sketch.id}`}>
//                   <div className="thumbnail-container">
//                     <img
//                       src={sketch.image}
//                       alt={sketch.title}
//                       className="thumbnail"
//                     />
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ClassesPage;