import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { Row, Button, Spacer } from "~/global/components";
import Breakdown from "./breakdown";

const { Text } = Typography;

interface Props {
  expand: boolean;
}

function List({ expand }: Props) {
  // Main return
  return (
    <Container expand={expand}>
      <Row justify="end">
        <Button size="large">
          <Text>+ Create New Order</Text>
        </Button>
      </Row>
      <Spacer height="10mm" />
      <Row gutter={[10, 10]}>
        <Breakdown
          open={10}
          checked={10}
          shipped={10}
          delivered={10}
          done={10}
        />
      </Row>
    </Container>
  );
}

export default List;

const Container = styled.div<{ expand: boolean }>`
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: ${({ expand }) => (expand ? "330px" : "30px")};
  transition-timing-function: cubic-bezier(0.39, 0.32, 0.44, 0.49);
  transition-duration: 150ms;
`;
