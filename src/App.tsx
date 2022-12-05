import React from "react";
import NumberAnimation from "./NumberAnimation";
import type * as CSS from "csstype";

const gridStyles: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridGap: "10px",
  width: "600px",
  height: "300px",
};

const alignment: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "40px",
};

const blackText: CSS.Properties = {
  fontSize: "40px",
};

const blueBackground: CSS.Properties = {
  ...alignment,
  backgroundColor: "lightblue",
};

const pinkBackground: CSS.Properties = {
  ...alignment,
  backgroundColor: "pink",
};

const greenBackground: CSS.Properties = {
  ...alignment,
  backgroundColor: "lightgreen",
};

const yellowBackground: CSS.Properties = {
  ...alignment,
  backgroundColor: "lightyellow",
};

const coralBackground: CSS.Properties = {
  ...alignment,
  backgroundColor: "lightcoral",
};

const purpleBackground: CSS.Properties = {
  ...alignment,
  backgroundColor: "purple",
  color: "white",
};

const backgroundStyles = [
  blueBackground,
  pinkBackground,
  greenBackground,
  yellowBackground,
  coralBackground,
  purpleBackground,
];

const numberAnimationProps = [
  {
    start: 0,
    end: 100,
    time: 5,
    randomize: true,
    decimalPlaces: 0,
  },
  {
    start: 1000,
    end: 50,
    time: 10,
    randomize: true,
    decimalPlaces: 0,
  },
  {
    start: 0,
    end: 30,
    time: 30,
    randomize: false,
    decimalPlaces: 2,
  },
  {
    start: 100,
    end: 0,
    time: 20,
    randomize: true,
    decimalPlaces: 0,
  },
  {
    start: 0,
    end: 1000,
    time: 25,
    randomize: false,
    decimalPlaces: 0,
  },
  {
    start: 500,
    end: 100,
    time: 4,
    randomize: false,
    decimalPlaces: 0,
  },
];

const App = () => (
  <React.Fragment>
    <h1>NumberAnimation Examples</h1>
    <div style={gridStyles}>
      {numberAnimationProps.map((props, index) => (
        <div key={index} style={backgroundStyles[index]}>
          <NumberAnimation {...props} />
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default App;
