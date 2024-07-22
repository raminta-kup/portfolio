import React from "react";
import { ButtonLink } from "./ButtonLink";
import styled from "styled-components";
import { ProjectTitle } from "./ProjectTitle";
import { TechnologiesContainer } from "./TechnologiesContainer";
import { ProjectImage } from "./ProjectImage";
import audiophilePic from "../assets/projectPictures/audiophileScreenshot.png";
import { AudiophileFeaturesList } from "./AudiophileFeatures";
import { devices } from "../screensizes";

export const ProjectContainerMain = ({ projectDesc, featuresList }) => {
  return (
    <StyledContainerMain>
      <StyledContainerSection>
        <ProjectImage imgSrc={audiophilePic} />
        <ProjectTitle projectTitle="audiophile e-commerce website" />
        <StyledButtonContainer>
          <ButtonLink buttonText="view source code" />
          <ButtonLink buttonText="view live demo" />
        </StyledButtonContainer>
        <TechnologiesContainer />
        <StyledProjectDesc>
          <p>{projectDesc}</p>
          <p>Current features:</p>
          <AudiophileFeaturesList />
        </StyledProjectDesc>
      </StyledContainerSection>
    </StyledContainerMain>
  );
};

export const StyledContainerMain = styled.main`
  width: 100%;
  scroll-behavior: smooth;

  @media ${devices.laptop} {
    width: 50vw;
    height: 100vh;
    overflow-y: hidden;
  }
`;

export const StyledContainerSection = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 56px 24px;
  line-height: 1.2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: darkred;

  @media ${devices.laptop} {
    height: 100vh;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledProjectDesc = styled.div`
  font-weight: 400;
  width: 90%;
  font-size: clamp(12px, 2vw, 16px);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
