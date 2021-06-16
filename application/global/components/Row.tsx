import React from "react";
import { Row, RowProps } from "antd";

type Props = RowProps & {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  fluid?: boolean;
};

function BaseRow({ fluid = false, children, ...rest }: Props) {
  // Main return
  return (
    <Row style={{ height: fluid ? "100%" : "" }} {...rest}>
      {children}
    </Row>
  );
}

export default BaseRow;
