import { MainContainer } from "./components/MainContainer";
import { ButtonLink } from "./components/ButtonLink";
import { ProjectContainerMain } from "./components/ProjectContainerMain";
import React from "react";

function App() {
  return (
    <>
      <MainContainer />
      <ProjectContainerMain projectDesc="This is a Dynamic E-commerce Website for selling audio related products. This application facilitates an intuitive and engaging shopping journey, from product discovery to checkout." />
    </>
  );
}

export default App;
