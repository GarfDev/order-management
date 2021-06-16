import React from "react";
import styled from "styled-components";

interface Props {
  toggle: () => void;
  expand: boolean;
  name: string;
}

const SideDrawer = ({ name, expand, toggle }: Props) => {
  // State

  // Main return
  return (
    <InvisibleContainer>
      <Container expand={expand}>
        <InnerContainer>
          <Title>{name}</Title>
        </InnerContainer>
        {/* Absolute components */}
        <Toggle onClick={toggle} />
      </Container>
    </InvisibleContainer>
  );
};

export default SideDrawer;

const Title = styled.h3`
  font-size: 3.5rem;
  font-weight: bold;
`;

const InvisibleContainer = styled.div`
  width: 350px;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

const Container = styled.div<{ expand: boolean }>`
  height: 100%;
  display: flex;
  position: relative;
  background-color: white;
  box-shadow: inset -28px 0 65px -28px ${({ theme }) => theme.colors.background};
  width: ${({ expand }) => (expand ? "300px" : "0px")};
  transition-timing-function: cubic-bezier(0.39, 0.32, 0.44, 0.49);
  transition-duration: 150ms;
`;

const InnerContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  margin-left: 30px;
  padding-top: 40px;
`;

const Toggle = styled.span`
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transform: translate(50%, 80%);
  border: 2px solid ${({ theme }) => theme.colors.normal};
  background-color: white;
  position: absolute;
  cursor: pointer;
`;
