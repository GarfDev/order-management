import React from "react";
import styled from "styled-components";
import SideDrawer from "./components/side-drawer";
import List from "./list";

export default () => {
  // States
  const [expand, setExpand] = React.useState(true);

  // Event handler
  const toggleExpand = () => setExpand(!expand);

  // Main return
  return (
    <Container>
      <SideDrawer name="Orders" expand={expand} toggle={toggleExpand} />
      <List expand={expand} />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  display: flex;
  height: 100vh;
  width: 100%;
`;
