import React from "react"
import styled from "styled-components";

export const AudiophileFeaturesList = () => {
    return (
        <StyledFeatureList>
            <li>-View the optimal layout for the app depending on their device's screen size</li>
            <li>-See hover states for all interactive elements on the page</li>
            <li>-Add/Remove products from the cart</li>
            <li>-Edit product quantities in the cart</li>
            <li>-Fill in all fields in the checkout </li>
            <li>-Receive form validations if fields are missed or incorrect during checkou</li>
            <li>-See correct checkout totals depending on the products in the cart</li>
            <li>-See an order confirmation modal after checking out with an order summary</li>
        </StyledFeatureList>
    )
}


export const StyledFeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;