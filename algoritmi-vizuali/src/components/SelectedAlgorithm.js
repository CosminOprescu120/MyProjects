import "./SelectedAlgorithm.css";
import React, { useState } from "react";

const SelectedAlgorithm = name => {
  console.log(name);
  return (
    <div className="algorithm-square ${name}">
      <div>
        <p className="algorithm-title">{name}</p>
      </div>
    </div>
  );
};

export default SelectedAlgorithm;
