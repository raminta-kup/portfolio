import { Header } from "./components/Header";
import { ButtonLink } from "./components/ButtonLink";
import { ProjectContainerMain } from "./components/ProjectContainerMain";
import React from "react";
import { StyledWrapper } from "./components/Wrapper";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <ProjectContainerMain projectDesc="This is a Dynamic E-commerce Website for selling audio related products. This application facilitates an intuitive and engaging shopping journey, from product discovery to checkout." />
    </StyledWrapper>
  );
}

export default App;
