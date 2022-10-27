import React from "react";

const Image = (props) => {
  return (
    <div className="image-container">
      <img
        className="image"
        src={props.src}
        width={props.width}
        height={props.height}
        alt="Here should be a cat :)"
      />
    </div>
  );
};

export default Image;
