import styled from "styled-components"
import React from "react"


export const ProjectTitle = ({projectTitle}) => {
    return (
        <StyledProjectTitle>{projectTitle}</StyledProjectTitle>
    )
}

export const StyledProjectTitle = styled.h2`
    font-weight: 700;
    text-align: center;
    font-size: clamp(16px, 3vw, 28px);
    max-width: 80%;
    text-transform: capitalize;
`