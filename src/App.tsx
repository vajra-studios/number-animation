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

const App = () => (
  <React.Fragment>
    <h1>NumberAnimation Examples</h1>
    <div style={gridStyles}>
      <div style={blueBackground}>
        <NumberAnimation
          start={0}
          end={100}
          time={5}
          randomize={true}
          decimalPlaces={0}
        />
      </div>
      <div style={pinkBackground}>
        <NumberAnimation
          start={1000}
          end={50}
          time={10}
          randomize={true}
          decimalPlaces={0}
        />
      </div>
      <div style={greenBackground}>
        <NumberAnimation
          start={0}
          end={10}
          time={5}
          randomize={false}
          decimalPlaces={2}
        />
      </div>
      <div style={yellowBackground}>
        <NumberAnimation
          start={100}
          end={0}
          time={10}
          randomize={true}
          decimalPlaces={0}
        />
      </div>
      <div style={coralBackground}>
        <NumberAnimation
          start={0}
          end={100}
          time={5}
          randomize={false}
          decimalPlaces={0}
        />
      </div>
      <div style={purpleBackground}>
        <NumberAnimation
          start={1000}
          end={50}
          time={10}
          randomize={false}
          decimalPlaces={0}
        />
      </div>
    </div>
  </React.Fragment>
);

export default App;
