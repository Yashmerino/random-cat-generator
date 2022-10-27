import React from "react";

const Button = (props) => {
  return (
    <div className="button-container">
      <button className="button" onClick={props.setCat}>
        Give me a cat
      </button>
    </div>
  );
};

export default Button;
