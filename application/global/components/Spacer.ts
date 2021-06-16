import { ReactText } from "react";
import styled from "styled-components";

const Spacer = styled.div<{ width?: ReactText; height?: ReactText }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export default Spacer;
