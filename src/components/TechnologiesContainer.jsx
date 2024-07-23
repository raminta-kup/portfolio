import React from "react";
import styled from "styled-components";
import { JsIcon } from "./JsIcon";
import { ReactIcon } from "./ReactIcon";
import { CssIcon } from "./CssIcon";
import { Html5Icon } from "./Html5Icon";
import { NodeJS } from "./NodeJS";
import { StyledComponentsIcon } from "./StyledComponents";
import { devices } from "../screensizes";

export const TechnologiesContainer = () => {
  return (
    <StyledTechnologiesUsedContainer>
      <StyledPar>Technologies used:</StyledPar>
      <StyledLanguageContainer>
        <Html5Icon />
        <CssIcon />
        {/* <StyledComponentsIcon /> */}
        <JsIcon />
        <ReactIcon />
        <NodeJS />
      </StyledLanguageContainer>
    </StyledTechnologiesUsedContainer>
  );
};

const StyledTechnologiesUsedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  align-items: center;
`;

const StyledPar = styled.p`
  color: #fff;
`;

const StyledLanguageContainer = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
`;