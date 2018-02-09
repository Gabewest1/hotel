import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const BookRoomButton = styled(Link)`
    border: solid thin #4c0505;
    border-radius: 1px;
    background: #fdfdfd;
    text-decoration: none;
    letter-spacing: 0.16rem;
    text-transform: uppercase;
    color: #4c0505;
    display: inline-block;
    width: 252px;
    height: 33px;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        color: white;
        border: solid thin white;
        background: black;
    }
`
const BookRoomButtonContainer = styled.div`

`

export default (props) => (
    <BookRoomButtonContainer { ...props }>
        <BookRoomButton to="/listings">Check Availability</BookRoomButton>
    </BookRoomButtonContainer>
)