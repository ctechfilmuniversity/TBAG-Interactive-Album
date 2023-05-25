import React from "react";
import { Link } from "react-router-dom";
import { Parallelogram } from "../components";

const ParallelogramContainer = ({ items, onSketchSelect }) => {
  const containerRef = React.useRef(null);

  const [containerWidth, setContainerWidth] = React.useState(0);
  React.useEffect(() => {
    const handleResize = () =>
      setContainerWidth(containerRef.current.offsetWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aspectRatio = 5; // or 4
  const itemStyle = {
    paddingBottom: `${100 / aspectRatio}%`,
    width: `${(containerWidth - 50 * (items.length - 1)) / items.length}px`, // subtract margin from container width
    marginRight: "50px"
  };

  return (
    <div className="parallelogram-container" ref={containerRef}>
      {items.map((item) => (
            <Parallelogram key={item.id} {...item} style={itemStyle} onSelect={onSketchSelect} />
      ))}
    </div>
  );
};

export default ParallelogramContainer;


// const Parallelogram = ({ id, image, alt, style, onSelect }) => {
//   const [showImage, setShowImage] = React.useState(false);

//   return (
//     <Link to={to}>
//       <div
//         className="parallelogram"
//         style={style}
//         onMouseEnter={() => setShowImage(true)}
//         onMouseLeave={() => setShowImage(false)}
//         onMouseOver={(event) =>
//           event.currentTarget.style.setProperty(
//             "transform",
//             `translate(${Math.random() * 30 - 10}%, ${
//               Math.random() * 30 - 10
//             }%) skew(-20deg) scale(1.1)`
//           )
//         }
//         onMouseOut={(event) =>
//           event.currentTarget.style.setProperty(
//             "transform",
//             `translate(${Math.random() * 30 - 10}%, ${
//               Math.random() * 30 - 10
//             }%) skew(-20deg) scale(1.1)`
//           )
//         }
//       >
//         {showImage && <img src={image} alt={alt} className="masked" />}
//       </div>
//     </Link>
//   );
// };

// const ParallelogramContainer = ({ items }) => {
//   const containerRef = React.useRef(null);

//   const [containerWidth, setContainerWidth] = React.useState(0);
//   React.useEffect(() => {
//     const handleResize = () =>
//       setContainerWidth(containerRef.current.offsetWidth);

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const itemWidth = containerWidth / items.length;
//   const itemStyle = { width: itemWidth, height: itemWidth / 2 };

//   return (
//     <div className="parallelogram-container" ref={containerRef}>
//       {items.map((item) => (
//         <Parallelogram key={item.to} {...item} style={itemStyle} />
//       ))}
//     </div>
//   );
// };


//   return (
//     <div className="parallelogram-container">
//       {images.map((image, index) => (
//         <Parallelogram
//           key={index}
//           image={image.url}
//           alt={image.alt}
//           style={{
//             marginLeft: index > 0 ? "4rem" : 0,
//             position: "relative",
//             // width: "150px",
//             // height: "500px",
//             overflow: "hidden",
//             transition: `transform 0.2s ease-in-out`,
//             // objectFit: "cover",
//             // background-color: "#00BFFB",
//             transform: `translate(${Math.random() * 30 - 10}%, ${Math.random() * 30 - 10}%) skew(-20deg)`, //translateY(${Math.random() * 20 - 10}px)
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ParallelogramContainer;
