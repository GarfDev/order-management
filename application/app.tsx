import React from "react";
import { ThemeProvider } from "styled-components";
// Internal Resource
import { Base, Light } from "~/global/theme";

function App() {
  return (
    <ThemeProvider theme={Light}>
      asldkjasjkldhakshjd
      <Base />
    </ThemeProvider>
  );
}

export default App;
