import React from "react";

const Image = (props) => {
  return (
    <div className="image-container">
      <img src={props.img} alt="Here should be a cat :)"></img>
    </div>
  );
};

export default Image;
