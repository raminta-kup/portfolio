import React from "react";
import styled from "styled-components";

export const MainContainer = () => {
  return (
    <StyledHeader>
      <StyledUpperBox>
        <StyledLanguageList>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          <li>react</li>
        </StyledLanguageList>
        <StyledContactList>
          <li>
            <StyledContactLink href="">email</StyledContactLink>
          </li>
          <li>
            <StyledContactLink href="">github</StyledContactLink>
          </li>
        </StyledContactList>
      </StyledUpperBox>
      <StyledLowerBox>
        hi. my name is <StyledName>raminta</StyledName> and i am a front end
        developer
      </StyledLowerBox>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding: 16px;
  line-height: 1.5;
`;

export const StyledUpperBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLanguageList = styled.ul`
  list-style: none;
  font-size: 12px;
`;

export const StyledContactList = styled.ul`
  list-style: none;
  font-size: 12px;
`

export const StyledContactLink = styled.a`
    color: #464f51;
    text-decoration: none;
    border-bottom: 1px solid #464f51;
    cursor: pointer;
`

export const StyledLowerBox = styled.h1`
  font-weight: 700;
  align-self: flex-end;
  text-align: right;
  padding: 368px 16px 16px;
  width: 60%;
  line-height: 1.2;
  color: #464f51;
  font-size: clamp(18px, 3vw, 48px);
`;

export const StyledName = styled.a`
  border-bottom: 2px solid #464f51;
  color: #464f51;
  cursor: pointer;
`;
