import React, { useState } from "react";
import NumberAnimation from "./NumberAnimation";
import type * as CSS from "csstype";

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

const buttonStyles: CSS.Properties = {
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  outline: "none",
  fontSize: "20px",
};

const flexContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
};

const SpeedExample = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <React.Fragment>
      <div style={blueBackground}>
        <NumberAnimation
          start={0}
          time={5}
          randomize={false}
          decimalPlaces={0}
          speed={speed}
        />
      </div>
      <div style={flexContainer}>
        <div style={buttonStyles} onClick={() => setSpeed(speed + 1)}>
          &uarr;
        </div>
        <div style={buttonStyles} onClick={() => setSpeed(speed - 1)}>
          &darr;
        </div>
      </div>
    </React.Fragment>
  );
};

export default SpeedExample;
