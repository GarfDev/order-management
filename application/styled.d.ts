import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    border: string;
    hover: string;
  }
}
