import React from "react"
import styled from "styled-components"

export const ButtonLink = ({link, buttonText}) => {
    return (
        <StyledLink target="_blank" href={link}>
            {buttonText}
        </StyledLink>
    )
}

export const StyledLink = styled.a`
    font-size: 12px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    background-color: transparent;
    padding: 12px 16px;
    font-weight: 700;
    cursor: pointer;
`