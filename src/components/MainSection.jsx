import React from 'react'
import Parallelogram from "./Parallelogram";
const MainSection = ({ sketchTitle, artistName, artistBio, artworkDescription }) => {


    return (
    <div className="container">
      <nav>
        {/* nav bar content */}
      </nav>
      <div className="parallelogram-container">
        <div className="sketch-section">
          {/* p5.js sketch component */}
        </div>
        <div className="artwork-info-section">
          <h1>{sketchTitle}</h1>
          <p>{artworkDescription}</p>
          <p>Artist: {artistName}</p>
          <p>{artistBio}</p>
        </div>
      </div>
      <footer>
        {/* footer content */}
      </footer>
    </div>
  );
};

export default ParallelogramContainer;


// export default function MainSection() {
//   return (
//     <div>MainSection</div>
//   )
// }


