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
  maxWidth: "400px",
  minWidth: "200px",
};

const buttonStyles: CSS.Properties = {
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  outline: "none",
  fontSize: "20px",
};

const speedButtonsContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90px",
};

const exampleContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  minHeight: "72px",
};

const example2: CSS.Properties = {
  minWidth: "320px",
  fontFamily: "Courier New, monospace",
  fontWeight: 700,
  fontSize: "36px",
};

function secondsSinceNovember15th2022(): number {
  const november15th2022 = new Date(2022, 10, 15);
  const currentDate = new Date();
  const millisecondsSinceNovember15th2022 =
    currentDate.getTime() - november15th2022.getTime();
  return Math.round(millisecondsSinceNovember15th2022 / 1000);
}

const popGrowthPerSecond = 2.08;

const SpeedExample = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <>
      <h2>We continue to grow...</h2>
      <div style={exampleContainer}>
        <div style={blueBackground}>
          <NumberAnimation
            start={0}
            randomize={false}
            decimalPlaces={0}
            speed={speed}
          />
        </div>
        <div style={speedButtonsContainer}>
          <div style={buttonStyles} onClick={() => setSpeed(speed + 1)}>
            &uarr;
          </div>
          <div style={buttonStyles} onClick={() => setSpeed(speed - 1)}>
            &darr;
          </div>
          <div>Speed: {speed}</div>
        </div>
      </div>

      <h2>Current World Population...</h2>
      <div style={exampleContainer}>
        <div style={{ ...blueBackground, ...example2 }}>
          <NumberAnimation
            start={
              8000000000 + secondsSinceNovember15th2022() * popGrowthPerSecond
            }
            randomize={false}
            decimalPlaces={0}
            speed={popGrowthPerSecond}
            formatNumber
          />
        </div>
      </div>
    </>
  );
};

export default SpeedExample;
