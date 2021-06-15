import React from "react";
import { ThemeProvider } from "styled-components";
// Internal Resource
import { Base, Light } from "~/global/theme";

function App() {
  return (
    <ThemeProvider theme={Light}>
      <h1 style={{ padding: '100px', fontSize: 128 }} >Text</h1>
      <Base />
    </ThemeProvider>
  );
}

export default App;
