import React from "react";

function Row(props) {
  return (
    <div className="container">
      <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
  </div>
  )
}

export default Row;
