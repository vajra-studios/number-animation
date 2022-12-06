import React, { useEffect, useState } from "react";
import NumberAnimation from "./NumberAnimation";
import type * as CSS from "csstype";

const pageStyles: CSS.Properties = {
  paddingLeft: "16px",
  paddingRight: "16px",
  margin: "0 auto",
  maxWidth: "600px",
};

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

const speedButtonStyles: CSS.Properties = {
  fontSize: "32px",
  display: "inline-block",
  cursor: "pointer",
};
const position: CSS.Properties = { position: "relative" };
const absolutePosition: CSS.Properties = {
  position: "absolute",
  top: "-8px",
  left: "0",
  width: "100%",
  textAlign: "center",
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
    time: 3,
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
    time: 2,
    randomize: true,
    decimalPlaces: 0,
  },
  {
    start: 0,
    end: 100000,
    time: 2,
    randomize: true,
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

const ExamplesGrid = () => {
  const [resetClicked, setResetClicked] = useState(true);

  // callback function to be passed to NumberAnimation components
  const handleReset = () => {
    setResetClicked(true);
  };

  // reset state variable after a delay to allow animations to reset
  useEffect(() => {
    if (resetClicked) {
      setTimeout(() => setResetClicked(false), 500);
    }
  }, [resetClicked]);

  return (
    <React.Fragment>
      <h2>NumberAnimation Examples</h2>
      <div style={gridStyles}>
        {numberAnimationProps.map((props, index) => (
          <div key={index} style={backgroundStyles[index]}>
            <NumberAnimation {...props} onReset={resetClicked} />
          </div>
        ))}
      </div>
      <div style={{ margin: "12px 0" }}>
        <button onClick={handleReset}>Reset Animations</button>
        &nbsp;(animations start in 0.5 second)
      </div>
    </React.Fragment>
  );
};

export default ExamplesGrid;
