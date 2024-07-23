import React from "react";
import styled from "styled-components";
import { devices } from "../screensizes";


export const ProjectImage = ({imgSrc}) => {
    return (
        <StyledProjectImg src={imgSrc} />
    )
}

export const StyledProjectImg = styled.img`
    border-radius: 10px;
    width: 80%;
    box-shadow: 0px 10px 40px -7px rgba(0, 0, 0, 0.25);
    
    @media ${devices.laptop} {
        width: 60%;
  }
`