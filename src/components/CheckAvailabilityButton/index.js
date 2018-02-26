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
    width: 230px;
    height: 29px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    top: 0px;
    left: -1px;
    transition: background-color 0.3s ease-out, color 0.3s ease-out, border-color 0.3s ease-out;
    background-color:  transparent;
    color: ${ SECONDARY_COLOR};
    border: solid 1px ${ SECONDARY_COLOR}};
    white-space: nowrap;
    width: 250px;
    height: 35px;
    
    @media (max-width: ${  FIRST_QUERY(-1) }) { 
        font-size: 11px;
        color: white;
        border: solid thin white;
        background: ${ SECONDARY_COLOR };
        
    }
    
    @media (max-width: 699px) { 
        width: 100%;
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