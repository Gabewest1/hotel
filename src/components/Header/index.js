import React from "react"
import styled from "styled-components"

class Header extends React.Component {
    render() {
        return (
            <HeaderView>
                <Title>
                    Lorem Title Ipsum
                </Title>
                <Description>
                    Lorem ipsum dolor amet poutine humblebrag kale chips, health goth flexitarian cray hashtag. 8-bit cornhole photo booth direct trade selfies normcore, cold-pressed salvia. Locavore godard food truck, heirloom pork belly coloring book wayfarers mixtape asymmetrical try-hard pabst lyft ethical swag.
                </Description>
            </HeaderView>
        )
    }
}

const SPACING = `
    position: relative;
    top: 75px;
    left: 75px;
    margin: 0;
`
const Title = styled.h1`
    ${ SPACING };
    font-size: 72px;
    font-family: 'Archivo Black', sans-serif;    
    margin-bottom: 15px;
`
const Description = styled.p`
    ${ SPACING };
    max-width: 768px;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
`
const HeaderView = styled.div`
    color: #161921;
    height: 100vh;
    background: url(/assets/images/home_hero.jpg) no-repeat;
    background-size: cover;
    background-position: 80% center;
`
export default Header
