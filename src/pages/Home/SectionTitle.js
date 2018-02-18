import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY, SECOND_QUERY} from "../../constants/index"

const SectionTitle = styled.h1`
    margin: 60px auto;
    padding-bottom: 50px;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-size: 34px;
    width: 80%;
    letter-spacing: 5px;
    text-transform: uppercase;
    position: relative;

    span {
        font-size: 25px; 
        position: relative;
        bottom: 3px;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${ SECONDARY_COLOR };
    }

    &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${ SECONDARY_COLOR };
    }

    @media (max-width: ${ FIRST_QUERY(-1) }) {
        font-size: 25px;

        span {
            font-size: 16px;
        }
    }
`

export default SectionTitle