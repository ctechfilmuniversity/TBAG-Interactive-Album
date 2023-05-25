// components/P5Sketch.jsx
import React from "react";
import Sketch from "react-p5";
// import ScriptTag from "react-script-tag";

const P5Sketch = ({ sketchPath }) => {
  // const SketchComponent = React.lazy(() =>
  //   import(/* webpackIgnore: true */ sketchPath)
  // );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {/* <ScriptTag type="text/javascript" src={sketchPath} /> */}
      {/* <Sketch setup={SketchComponent.setup} draw={SketchComponent.draw} /> */}
    </React.Suspense>
  );
};

export default P5Sketch;
