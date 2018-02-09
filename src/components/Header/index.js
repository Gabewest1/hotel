import React from "react"
import styled from "styled-components"

class Header extends React.Component {
    render() {
        return (
            <HeaderView>
                <Overlay />
                <Wrapper>
                    <Title>
                        Lorem Title Ipsum
                    </Title>
                    <Description>
                        Lorem ipsum dolor amet poutine humblebrag kale chips, health goth flexitarian cray hashtag. 8-bit cornhole photo booth direct trade selfies normcore, cold-pressed salvia. Locavore godard food truck, heirloom pork belly coloring book wayfarers mixtape asymmetrical try-hard pabst lyft ethical swag.
                    </Description>
                </Wrapper>
            </HeaderView>
        )
    }
}

const SPACING = `
    position: relative;
    top: 175px;
    left: 50px;
    margin: 0;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.3);
    height: 100%;
    width: 100%;
`
const Wrapper = styled.div`
    ${ SPACING };
    // background: #efefefcc;
    display: inline-block;
    // text-align: center;
    padding: 15px;
    border-radius: 9px;
`
const Title = styled.h1`
    font-size: 72px;
    font-family: 'Hind', sans-serif;
    margin: 0;
    margin-bottom: 15px;
`
const Description = styled.p`
    max-width: 768px;
    font-size: 18px;
`
const HeaderView = styled.div`
    color: #efefef;
    height: 100vh;
    background: url(/assets/images/home_hero.jpg) no-repeat;
    background-size: cover;
    background-position: 80% center;
`
export default Header
