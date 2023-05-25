import React from 'react';

function Parallelogram(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyles = {
    display: 'inline-block',
    position: 'relative',
    width: '200px',
    height: '100px',
    transform: 'skew(20deg)',
    backgroundColor: 'lightblue',
    overflow: 'hidden',
    top: Math.random() * 100 + 'px',
    marginRight: '10px',
  };

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: '-30%',
    width: '130%',
    transform: isHovered ? 'scale(1.1)' : 'none',
  };

  return (
    <div
      style={containerStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.image} alt={props.alt} style={imageStyles} />
    </div>
  );
}

export default Parallelogram;