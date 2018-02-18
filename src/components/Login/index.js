import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY, SECOND_QUERY} from "../../constants/index"

class Login extends React.Component {
    render() {

        return (
            <LoginWrapper>
                <LoginButtons 
                    style={{
                            borderRight: '#605b4e 1px solid',
                            paddingRight: '18px'
                    }}>Log In</LoginButtons>
                <LoginButtons
                    style={{
                            paddingLeft: '18px'
                    }}>Sign Up</LoginButtons>
                </LoginWrapper>
        )
    }
}

const LoginWrapper = styled.div`
    position: relative;
    right: 20px;
    top: 14px;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    
    @media (max-width: ${ FIRST_QUERY(-1) }) {
        width: 100px;
        right: 0px;
        width: 130px;
        top: 0px;
    }
`
    
    const LoginButtons = styled.button`
    // text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    // padding: 0;
    margin: 0;
    border: none;
    font-family: 'Muli', sans-serif;
    color: #363636;
    height: 20px;

    
    @media (max-width: ${ FIRST_QUERY(-1) }) {
        letter-spacing: 0.065rem;
        font-size: 12px;
        font-weight: bold;
        color: #c4b8a7;
    }

    &:hover {
        color: ${ TERTIARY_COLOR };
    }
`


export default Login
