import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"


class Hero extends React.Component {
    render() {
        return (
            <HeroView>
                <Overlay />
                <Wrapper>
                    <Title>
                        <H1Vector src="/assets/images/hero-title.svg" />
                    </Title>
                    <Description>
                        Lorem ipsum dolor amet poutine humblebrag kale chips.
                    </Description>
                </Wrapper>
            </HeroView>
        )
    }
}

const SPACING = `
    position: relative;

    @media (min-width: ${ FIRST_QUERY(0) }) {
        top: 175px;
        // left: 50px;
        margin: 0;
        
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, transparent 40%, #000 100%);
    height: 100vh;
    width: 100%;
`
const Wrapper = styled.div`
    ${ SPACING };
    display: inline-block;
    text-align: center;
    align-self: center;
    position: relative;
    top: 45px;
    right: 20px;
`
const Title = styled.div`
    padding-bottom: 25px;
`

const H1Vector = styled.img`
max-width: 300px;

@media (min-width: ${ FIRST_QUERY() }) {
    max-width: 500px;
}

`

const Description = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    max-width: 768px;
    font-size: 14px;
    color: #f0f0f0b0;
`
const HeroView = styled.div`
    color: #efefef;
    height: 100vh;
    background: url(/assets/images/home_hero6.png) no-repeat;
    background-size: cover;
    background-position: 84% center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${ FIRST_QUERY(0) }) {
        background-position: 100% center;

    }
`
export default Hero
