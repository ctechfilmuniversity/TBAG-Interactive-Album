import React from "react";

const Parallelogram = ({ id, image, alt, style, onSelect }) => {
  console.log(image);
  const [showImage, setShowImage] = React.useState(true);
  const parallelogramRef = React.useRef(null);

  const applyTransform = (element) => {
    element.style.setProperty(
      "transform",
      `translate(${Math.random() * 30 - 10}%, ${
        Math.random() * 30 - 10
      }%) skew(-20deg) scale(1.1)`
    );
  };

  React.useEffect(() => {
    applyTransform(parallelogramRef.current);
  }, []);

  return (
    <div
      ref={parallelogramRef}
      className="parallelogram"
      style={style}
      onMouseEnter={() => 
        {
          console.log("mouse enter");
          setShowImage(true);
          console.log(showImage);
        }}
        
      onMouseLeave={() => {
        console.log("mouse leave");
        setShowImage(false)
        console.log(showImage);
      }}
      onMouseOver={(event) => applyTransform(event.currentTarget)}
      onMouseOut={(event) => applyTransform(event.currentTarget)}
      onClick={() => onSelect(id)}
    >
      {showImage && <img src={image} alt={alt} />}

    </div>
  );
};

export default Parallelogram;


// import React from "react";

// const Parallelogram = ({ id, image, alt, style, onSelect }) => {
//   const [showImage, setShowImage] = React.useState(false);
//   const parallelogramRef = React.useRef(null);

//   const applyTransform = (element) => {
//     element.style.setProperty(
//       "transform",
//       `translate(${Math.random() * 30 - 10}%, ${
//         Math.random() * 30 - 10
//       }%) skew(-20deg) scale(1.1)`
//     );
//   };

//   React.useEffect(() => {
//     applyTransform(parallelogramRef.current);
//   }, []);

//   return (
//     <div
//       ref={parallelogramRef}
//       className="parallelogram"
//       style={style}
//       onMouseEnter={() => {
//         console.log("mouse enter");
//         console.log()
//         setShowImage(true);
//        }
//       }
//       onMouseLeave={() => setShowImage(false)}
//       onMouseOver={(event) => applyTransform(event.currentTarget)}
//       onMouseOut={(event) => applyTransform(event.currentTarget)}
//       onClick={() => onSelect(id)}
//     >
//       {showImage && <img src={image} alt={alt} className="masked" />}
//     </div>
//   );
// };

// export default Parallelogram;


// import React from "react";

// const Parallelogram = ({ id, thumbnailPath, alt, style, onSelect }) => {
//   const [showImage, setShowImage] = React.useState(false);
//   const parallelogramRef = React.useRef(null);

//   const applyTransform = (element) => {
//     element.style.setProperty(
//       "transform",
//       `translate(${Math.random() * 30 - 10}%, ${
//         Math.random() * 30 - 10
//       }%) skew(-20deg) scale(1.1)`
//     );
//   };

//   React.useEffect(() => {
//     applyTransform(parallelogramRef.current);
//   }, []);

//   return (
//     <div
//       ref={parallelogramRef}
//       className="parallelogram"
//       style={style}
//       onMouseEnter={() => setShowImage(true)}
//       onMouseLeave={() => setShowImage(false)}
//       onMouseOver={(event) => applyTransform(event.currentTarget)}
//       onMouseOut={(event) => applyTransform(event.currentTarget)}
//       onClick={() => onSelect(id)}
//     >
//       {showImage && <img src={thumbnailPath} alt={alt} className="masked" />}
//     </div>
//   );
// };

// export default Parallelogram;


// import React from "react";
// import { waveryscreenshot02, waveryscreenshot01 } from "../assets";
// import { Link } from "react-router-dom";


// const Parallelogram = ({ image, alt, style, to }) => {
//   const [showImage, setShowImage] = React.useState(false);

//   return (
//     // <Link to={to}>
//       <div
//             className="parallelogram" style={style}
//             onMouseEnter={() => setShowImage(true)}
//             onMouseLeave={() => setShowImage(false)}
//             onMouseOver={(event) =>
//               event.currentTarget.style.setProperty(
//                 "transform",
//                 `translate(${Math.random() * 30 - 10}%, ${Math.random() * 30 - 10}%) skew(-20deg) scale(1.1)` //"translate(${Math.random() * 30 - 10}px, ${Math.random() * 30 - 10}px) scale(1.1) skew(-20deg)",
    
//               )
//             }
//             onMouseOut={(event) =>
//               event.currentTarget.style.setProperty("transform", `translate(${Math.random() * 30 - 10}px, ${Math.random() * 30 - 10}px) skew(-20deg) scale(1.1)`) // "skew(-20deg)")
//             }
//           >
//             {showImage && <img src={image} alt={alt} className="masked" />}
//           </div>
//     // </Link>
    
//   );
// };

// export default Parallelogram;
