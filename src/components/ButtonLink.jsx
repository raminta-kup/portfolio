import React from "react"
import styled from "styled-components"

export const ButtonLink = ({link, buttonText}) => {
    return (
        <StyledButtonLink target="_blank" href={link}>
            {buttonText}
        </StyledButtonLink>
    )
}

export const StyledButtonLink = styled.a`
    font-size: 12px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    background-color: transparent;
    padding: 12px 16px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;

    &:hover,
    &:focus {
        background-color: white;
        color: darkred;
        transition: all 0.3s ease-in-out;
    }
    
`