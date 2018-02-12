import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from "../../constants/index"

const BookRoomButton = styled(Link)`
    border: solid 1px black;
    border-radius: 2px;
    background: #fdfdfd;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: black;
    display: inline-block;
    width: 220px;
    height: 29px;
    font-size: 13px;
    // font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    top: 1px;
    transition: background-color 0.3s ease-out, color 0.3s ease-out, border-color 0.3s ease-out;

    &:hover {
        color: white;
        border: solid thin white;
        background: ${ SECONDARY_COLOR }
    }
`
const BookRoomButtonContainer = styled.div`

`

export default (props) => (
    <BookRoomButtonContainer { ...props }>
        <BookRoomButton to="/listings">Check Availability</BookRoomButton>
    </BookRoomButtonContainer>
)