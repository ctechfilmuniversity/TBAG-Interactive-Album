import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sketchInfo } from "../constants";
import ReactMarkdown from "react-markdown";

const SketchDetail = () => {
  const { id } = useParams();
  const sketch = sketchInfo.find((item) => item.id === parseInt(id, 10));
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(sketch.description)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [sketch.description]);

  return (
    <div className="sketch-detail">
      <div className="video-container">
        <video src={sketch.videoPath} loop controls autoPlay />
      </div>
      <div className="description-container">
        <h2>{sketch.title}</h2>
        <h3>{sketch.artist}</h3>
        <p>{sketch.year}</p>
        <ReactMarkdown children={markdownContent} />
      </div>
    </div>
  );
};

export default SketchDetail;
