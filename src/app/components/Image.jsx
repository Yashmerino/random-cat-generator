import React from "react";

const Image = (props) => {
  return (
    <div className="image-container">
      <img src={props.src} alt="Here should be a cat :)" />
    </div>
  );
};

export default Image;
