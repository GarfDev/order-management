import React from "react";
import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: string[];
    fontSizes: number[];
    colors: {
      normal: string;
      background: string;
    };

    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };

    fontWeights: {
      body: React.ReactText;
      heading: React.ReactText;
      bold: React.ReactText;
    };

    lineHeights: {
      body: React.ReactText;
      heading: React.ReactText;
    };
    shadows: {
      small: string;
      large: string;
    };
  }
}
