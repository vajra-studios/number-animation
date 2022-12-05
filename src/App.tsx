import React, { useEffect, useState } from "react";
import NumberAnimation from "./NumberAnimation";
import type * as CSS from "csstype";
import ExamplesGrid from "./ExamplesGrid";

const pageStyles: CSS.Properties = {
  paddingLeft: "16px",
  paddingRight: "16px",
  margin: "0 auto",
  maxWidth: "600px",
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


const App = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <div style={pageStyles}>
      <ExamplesGrid />
      <hr />
      <div></div>
      <div style={blueBackground}>
        <NumberAnimation
          start={0}
          time={5}
          randomize={false}
          decimalPlaces={0}
          speed={speed}
        />
      </div>
      <button onClick={() => setSpeed(speed + 1)}>Increase Speed</button>
      <button onClick={() => setSpeed(speed - 1)}>Decrease Speed</button>
    </div>
  );
};

export default App;
