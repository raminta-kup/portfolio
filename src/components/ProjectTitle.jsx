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
    /* padding: 24px 0; */
    max-width: 80%;
    text-transform: capitalize;
`