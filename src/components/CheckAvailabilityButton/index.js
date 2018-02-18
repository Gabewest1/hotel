import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY } from "../../constants/index"

const BookRoomButton = styled(Link)`
    border-radius: 2px;
    background: #fdfdfd;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffe5bfe0;  
    display: inline-block;
    width: 238px;
    height: 29px;
    font-size: 13px;
    // font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    top: 3px;
    left: -1px;
    transition: background-color 0.3s ease-out, color 0.3s ease-out, border-color 0.3s ease-out;
    background-color:  transparent;
    color: ${ SECONDARY_COLOR};
    border: solid 1px ${ SECONDARY_COLOR}};
    white-space: nowrap;
    
    @media (max-width: ${  FIRST_QUERY(-1) }) { 
        top: 4px;
        font-size: 11px;
        width: 200px;
        color: white;
        border: solid thin white;
        background: ${ SECONDARY_COLOR };

    }
    
    &:hover {
        color: white;
        border: solid thin white;
        background: ${ SECONDARY_COLOR };
    }
`
const BookRoomButtonContainer = styled.div`

`

export default (props) => (
    <BookRoomButtonContainer { ...props }>
        <BookRoomButton to="/listings">Check Availability</BookRoomButton>
    </BookRoomButtonContainer>
)