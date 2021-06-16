import React from "react";
import styled from "styled-components";
import { ORDER_STATUS } from "~/features/orders/constants";
import { Spacer } from "~/global/components";

interface Props {
  [ORDER_STATUS.OPEN]: number;
  [ORDER_STATUS.CHECKED]: number;
  [ORDER_STATUS.SHIPPED]: number;
  [ORDER_STATUS.DELIVERED]: number;
  [ORDER_STATUS.DONE]: number;
}

const Breakdown = (props: Props) => {
  // Main return
  return (
    <Container>
      {Object.keys(props).map((key, index) => (
        <>
          <Box key={"orders-list-breakdown-" + key}>
            <Label>{key.replace("_", " ")}</Label>
            <Number>{(props as any)[key]}</Number>
          </Box>
          {index < Object.keys(props).length - 1 && <Line width="1px" />}
        </>
      ))}
    </Container>
  );
};

export default Breakdown;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  box-shadow: 10px 5px 5px rgb(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
`;

const Line = styled(Spacer)`
  margin: 0px 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  cursor: pointer;
  user-select: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  height: 80px;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.normal};
    border-radius: 5px;
  }

`;

const Label = styled.span`
  font-weight: 1000;
  font-size: 1rem;
  text-transform: capitalize;
  line-height: 1.3;
`;

const Number = styled.span`
  font-weight: 1000;
  font-size: 2.1rem;
`;
