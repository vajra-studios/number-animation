import React from "react";
import type * as CSS from "csstype";
import ExamplesGrid from "./ExamplesGrid";
import SpeedExample from "./SpeedExample";

const pageStyles: CSS.Properties = {
  height: "100vh",
  background: "linear-gradient(to top right, #ECE9E6, #FFFFFF)",
  padding: "20px 16px",
};

const pageContentStyles: CSS.Properties = {
  margin: "0 auto",
  maxWidth: "600px",
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
