import React from "react"
import styled from "styled-components"


export const TechnologiesContainer = () => {
    return (
        <StyledTechnologiesUsedContainer>
            <StyledPar>Technologies used:</StyledPar>
            <StyledLanguageContainer>
                
            </StyledLanguageContainer>
        </StyledTechnologiesUsedContainer>
    )
}

const StyledTechnologiesUsedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #fff;
    align-items: center;
`

const StyledPar = styled.p`
    color: #fff;
`

const StyledLanguageContainer = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
`