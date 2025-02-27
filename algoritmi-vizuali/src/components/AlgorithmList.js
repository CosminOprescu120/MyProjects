import React from "react";
import "./AlgorithmList.css";

function AlgorithmList(props) {
  const { name, isSelected, onSelect, onDeselect } = props;

  const toggleVisibility = () => {
    if (isSelected) {
      onDeselect(); // Hide this algorithm
    } else {
      onSelect(); // Show this algorithm
    }
  };

  return (
    <div>
      <div className="algorithm-square">
        <p className="algorithm-title">{name}</p>
        <button className="selection-button" onClick={toggleVisibility}>
          Selecteaza algoritm
        </button>
      </div>
      <div className={`${name} ${isSelected ? "visible" : "hidden"}`}>
        This is a paragraph for {props.name}
      </div>
    </div>
  );
}

export default AlgorithmList;
