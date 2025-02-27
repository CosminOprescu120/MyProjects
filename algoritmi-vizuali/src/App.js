import React, { useState } from "react";
import AlgorithmList from "./components/AlgorithmList";
import "./App.css";

const algorithms = [
  {
    name: "SortareBubbleSort",
    initialData: [5, 3, 8, 4, 6],
    tasks: [
      {
        question:
          "Care este primul pas în Bubble Sort pentru lista [5, 3, 8, 4, 6]?",
        solution: "3,5,8,4,6",
      },
      // Adaugă mai multe task-uri aici
    ],
  },
  {
    name: "BreadthFirstSearch",
    initialData: {
      graph: {
        A: ["B", "C"],
        B: ["A", "D", "E"],
        C: ["A", "F"],
        D: ["B"],
        E: ["B", "F"],
        F: ["C", "E"],
      },
      startNode: "A",
    },
    tasks: [
      {
        question:
          "What is the order of nodes visited in BFS starting from node A?",
        solution: "A,B,C,D,E,F",
      },
    ],
  },
  {
    name: "BinarySearch",
    initialData: {
      sortedArray: [1, 3, 5, 7, 9, 11, 13, 15],
      target: 7,
    },
    tasks: [
      {
        question:
          "What is the index of the target value 7 in the sorted array [1, 3, 5, 7, 9, 11, 13, 15]?",
        solution: "3", // Index of 7 in the array
      },
      {
        question:
          "What are the mid-values checked during the binary search for the target 7?",
        solution: "7", // The mid-value checked in the first step
      },
      // Add more tasks here
    ],
  },
  // Adaugă mai mulți algoritmi aici
];

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  return (
    <div className="App">
      <h1>Învață Algoritmi Vizual</h1>
      <div className="algorithm-list-container">
        {algorithms.map((algorithm, index) => (
          <AlgorithmList
            key={index}
            name={algorithm.name}
            initialData={algorithm.initialData}
            tasks={algorithm.tasks}
            isSelected={selectedAlgorithm === algorithm.name}
            onSelect={() => setSelectedAlgorithm(algorithm.name)}
            onDeselect={() => setSelectedAlgorithm(null)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
