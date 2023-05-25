import styles from "./style";
import {
  Footer,
  Navbar,
  AboutPage,
  Ctech,
  ClassesPage,
  SketchDetail,
  AlbumDetailPage
} from "./components";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { sketchInfo } from "../src/constants/index.js";

const App = () => {
  const [selectedSketch, setSelectedSketch] = useState(sketchInfo[0]);
  const [year, setYear] = useState("2022");
  const [filteredSketches, setFilteredSketches] = useState([]);

  const handleSketchSelection = (id) => {
    setSelectedSketch(sketchInfo.find((sketch) => sketch.id === id));
  };

  const handleYearSelection = (selectedYear) => {
    setYear(selectedYear);
    const firstSketchOfTheYear = sketchInfo.find((sketch) => sketch.year === selectedYear);
    setSelectedSketch(firstSketchOfTheYear);
  };

  useEffect(() => {
    const filtered = sketchInfo.filter((sketch) => sketch.year === year);
    setFilteredSketches(filtered);
  }, [year]);

  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`bg-primary ${styles.boxWidth} navbar`}>
            <Navbar onYearSelect={handleYearSelection} />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/ctech" element={<Ctech />} />
          <Route path="/albums" element={<ClassesPage />} />
          <Route path="/albums/:year" element={<AlbumDetailPage year={year} onSketchSelect={handleSketchSelection} selectedSketch={selectedSketch} />} />
          <Route path="/sketch-detail/:id" element={<SketchDetail />} />
        </Routes>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//element={<YearPage filteredSketches={filteredSketches} />}
// import styles from "./style";
// import {
//   Footer,
//   Navbar,
//   Sidebar,
//   // P5Container,
//   ArtworkInfo,
//   ParallelogramContainer,
// } from "./components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { React, useState, useEffect} from "react";
// import ReactDOM from "react-dom";
// import { thumbnails, sketchInfo } from "../src/constants/index.js";

// const App = () => {
//   const [selectedSketch, setSelectedSketch] = useState(sketchInfo[0]);
//   const [year, setYear] = useState('2023'); // Add a year state variable with a default value of 2023
//   const [filteredSketches, setFilteredSketches] = useState([]);

//   const handleSketchSelection = (id) => {
//     setSelectedSketch(sketchInfo.find((sketch) => sketch.id === id));
//   };

//   // Update the year based on the clicked link
//   const handleYearSelection = (selectedYear) => {
//     setYear(selectedYear);
//   };

//   // Filter sketches based on the selected year
//   useEffect(() => {
//     const filtered = sketchInfo.filter((sketch) => sketch.year === year);
//     setFilteredSketches(filtered);
//     console.log(filtered);
//     console.log(filteredSketches);
//   }, [year]);

//   return (
//     <BrowserRouter>
//     <div className="bg-primary w-full overflow-hidden">
//       {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`bg-primary ${styles.boxWidth} navbar`}>
//           <Navbar />
//         </div>
//       </div> */}
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`bg-primary ${styles.boxWidth} navbar`}>
//           <Navbar onYearSelect={handleYearSelection} />
//         </div>
//       </div>
//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} upper-section`}>
//         <ParallelogramContainer
//           items={filteredSketches} // Use filteredSketches instead of sketchInfo
//           onSketchSelect={handleSketchSelection}
//         />
//       </div>
//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} botton-section`}>
//         <div className={`bg-primary ${styles.paddingX}`}>
//           <div className={`flex ${styles.boxWidth} sketch-container`}>
//             <div className={`video-container`}>
//               <video className={`w-full h-full`} src={selectedSketch.videoPath} loop controls autoPlay />
//             </div>
//             <div className={`px-4 artwork-description`}>
//               <ArtworkInfo
//                 title={selectedSketch.title}
//                 artist={selectedSketch.artist}
//                 subtitle={selectedSketch.subtitle}
//                 description={selectedSketch.description}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   </BrowserRouter>
//   );
// };
// export default App;

// import styles from "./style";
// import {
//   Footer,
//   Navbar,
//   Sidebar,
//   // P5Container,
//   ArtworkInfo,
// } from "./components";
// import ParallelogramContainer from "./components/ParallelogramContainer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import React from "react";
// import ReactDOM from "react-dom";
// import { ReactP5Wrapper } from "react-p5-wrapper";
// import { thumbnails, sketchInfo } from "../src/constants/index.js";

// function sketch(p5) {
//   p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

//   p5.draw = () => {
//     p5.background(250);
//     p5.normalMaterial();
//     p5.push();
//     p5.rotateZ(p5.frameCount * 0.01);
//     p5.rotateX(p5.frameCount * 0.01);
//     p5.rotateY(p5.frameCount * 0.01);
//     p5.plane(100);
//     p5.pop();
//   };
// }

// const App = () => (
//   <BrowserRouter>
//     <div className="bg-primary w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>
//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}></div>

//       <div className={`bg-primary hero`}>
//         <Sidebar />
//         <ParallelogramContainer items={thumbnails} />
//       </div>
//       <div className={`bg-primary`}>
//         <div className={`flex ${styles.boxWidth} sketch-container`}>
//           <div className={`w-1/2 p5-container`}>
//             {/* <ReactP5Wrapper sketch={sketch} /> */}
//           </div>
//           <div className={`w-1/2 px-4`}>
//             <ArtworkInfo
//               title={sketchInfo[1].title}
//               artist={sketchInfo[1].artist}
//               subtitle={sketchInfo[1].subtitle}
//               description={sketchInfo[1].description}
//             />
//           </div>
//         </div>
//       </div>

//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   </BrowserRouter>
// );

// export default App;



// const App = () => {
//   const [selectedSketch, setSelectedSketch] = useState(sketchInfo[0]);

//   const handleSketchSelection = (id) => {
//     setSelectedSketch(sketchInfo.find((sketch) => sketch.id === id));
//   };