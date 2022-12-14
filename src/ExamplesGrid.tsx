import React, { useEffect, useState } from "react";
import NumberAnimation from "./NumberAnimation";
import type * as CSS from "csstype";
import "./App.css";

const alignment: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "40px",
  flexDirection: "column",
  padding: "4px 0",
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

const subtitleStyles: CSS.Properties = {
  fontSize: "18px",
  marginTop: "4px",
};

const backgroundStyles = [
  blueBackground,
  pinkBackground,
  greenBackground,
  yellowBackground,
  coralBackground,
  purpleBackground,
];

const cellProps = [
  {
    numberAnimationProps: {
      start: 1,
      end: 100,
      time: 1,
      randomize: true,
      decimalPlaces: 0,
    },
    subtitle: "Branches",
  },
  {
    numberAnimationProps: {
      start: 0,
      end: 30,
      time: 4,
      randomize: false,
      decimalPlaces: 2,
      formatNumber: true,
    },
    subtitle: "Years of Service",
  },
  {
    numberAnimationProps: {
      start: 0,
      end: 1000000,
      time: 1,
      randomize: true,
      decimalPlaces: 0,
      formatNumber: true,
      finalDisplayValue: "$1,000,000",
    },
    subtitle: "Revenue Last Year",
  },
  {
    numberAnimationProps: {
      start: 10,
      end: 500,
      time: 1.5,
      randomize: false,
      decimalPlaces: 0,
      finalDisplayValue: "500+",
    },
    subtitle: "Employees",
  },
  {
    numberAnimationProps: {
      start: 1000,
      end: 50,
      time: 10,
      randomize: true,
      decimalPlaces: 0,
    },
    subtitle: "Counting down...",
  },
  {
    numberAnimationProps: {
      start: 100,
      end: 0,
      time: 2,
      randomize: true,
      decimalPlaces: 0,
    },
    subtitle: "Counting down...",
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
      setTimeout(() => setResetClicked(false), 200);
    }
  }, [resetClicked]);

  return (
    <React.Fragment>
      <h2>Animation Examples</h2>
      <div className="examples-grid">
        {cellProps.map(
          (props, index) =>
            index < 4 && (
              <div key={index} style={backgroundStyles[index]}>
                <NumberAnimation
                  {...props.numberAnimationProps}
                  onReset={resetClicked}
                />
                <div style={subtitleStyles}>{props.subtitle}</div>
              </div>
            )
        )}
      </div>
      <div style={{ margin: "12px 0" }}>
        <button onClick={handleReset}>Reset Animations</button>
        &nbsp;(animations start after a short delay)
      </div>
    </React.Fragment>
  );
};

export default ExamplesGrid;
