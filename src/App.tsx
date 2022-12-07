import React from "react";
import type * as CSS from "csstype";
import ExamplesGrid from "./ExamplesGrid";
import SpeedExample from "./SpeedExample";

const pageStyles: CSS.Properties = {
  paddingLeft: "16px",
  paddingRight: "16px",
  margin: "0 auto",
  maxWidth: "600px",
};

const App = () => {
  return (
    <div style={pageStyles}>
      <ExamplesGrid />
      <hr />
      <SpeedExample />
    </div>
  );
};

export default App;
