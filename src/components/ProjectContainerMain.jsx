import React from "react";
import { ButtonLink } from "./ButtonLink";
import styled from "styled-components";
import { ProjectTitle } from "./ProjectTitle";

export const ProjectContainerMain = () => {
  return (
    <StyledContainerMain>
        <ProjectTitle projectTitle="project testing abc" />
        {/* <ButtonLink buttonText="view source code" /> */}
    </StyledContainerMain>
  )
};

export const StyledContainerMain = styled.div`
    min-height: 100vh;
    padding: 56px 24px;
    line-height: 1.2;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`