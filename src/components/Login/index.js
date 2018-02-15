import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY, SECOND_QUERY} from "../../constants/index"

class Login extends React.Component {
    render() {

        return (
            <LoginWrapper>
                <LoginButtons>Log In</LoginButtons>
                <Line />
                <LoginButtons>Sign Up</LoginButtons>
            </LoginWrapper>
        )
    }
}

const LoginWrapper = styled.div`
    position: relative;
    right: 20px;
    top: 7px;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    // background-color: red;
    
    @media (max-width: ${ FIRST_QUERY() }) {
        width: 100px;
        right: 0px;
        width: 130px;
    }

    @media (max-width: 500px) {
        width: 100px;
    }

`
    
    const LoginButtons = styled.button`
    // text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Muli', sans-serif;
    color: #363636;
    
    @media (max-width: ${ FIRST_QUERY() }) {
        letter-spacing: 0.065rem;
        font-size: 12px;
        font-weight: bold;
    }

    @media (max-width: 500px) {
        letter-spacing: 0.065rem;
        font-size: 10px;
        font-weight: bold;
        // width: 40px;
    }

    &:hover {
        color: ${ TERTIARY_COLOR };
    }
`

const Line = styled.div`
background-color: #605b4e;
width: 1px;
height: 20px;
position: relative;
bottom: 1px;
left: 1px;
margin: 10px;

    @media (max-width: ${ FIRST_QUERY() }) {
        background-color: #c9c9c9;

    }
`

export default Login
