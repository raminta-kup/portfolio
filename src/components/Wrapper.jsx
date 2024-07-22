import React from "react"
import styled from "styled-components"
import { devices } from "../screensizes"

// export const Wrapper = ({content}) => {
//     return (
//         <StyledWrapper>
//             {content}
//         </StyledWrapper>
//     )
// }

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;

    @media ${devices.laptop} {
        flex-direction: row-reverse;
        height: 100vh;
        overflow-x: hidden;
    }
`