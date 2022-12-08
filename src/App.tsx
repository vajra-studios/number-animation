import React from "react";
import type * as CSS from "csstype";
import ExamplesGrid from "./ExamplesGrid";
import SpeedExample from "./SpeedExample";

const pageStyles: CSS.Properties = {
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(to right, #ECE9E6, #FFFFFF)",
};

const pageContentStyles: CSS.Properties = {
  paddingLeft: "16px",
  paddingRight: "16px",
  margin: "0 auto",
  maxWidth: "600px",
  paddingTop: "20px" // required for the h2 margin
};

const App = () => {
  return (
    <div style={pageStyles}>
      <div style={pageContentStyles}>
        <ExamplesGrid />
        <hr />
        <SpeedExample />
      </div>
    </div>
  );
};

export default App;
