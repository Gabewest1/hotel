import React from "react"
import styled from "styled-components"


class Hero extends React.Component {
    render() {
        return (
            <HeroView>
                <Overlay />
                <Wrapper>
                    <Title>
                        Lorem Title Ipsum
                    </Title>
                    <Description>
                        Lorem ipsum dolor amet poutine humblebrag kale chips, health goth flexitarian.
                    </Description>
                </Wrapper>
            </HeroView>
        )
    }
}

const SPACING = `
    position: relative;
    top: 175px;
    // left: 50px;
    margin: 0;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.4);
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
    text-align: center;
    align-self: center;
`
const Title = styled.h1`
    font-family: 'Hind', sans-serif;
    font-family: 'Rammetto One', cursive;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Lato', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'Slabo 27px', serif;
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Dhurjati', sans-serif;
    font-family: 'Raleway', sans-serif;
    font-family: 'PT Sans', sans-serif;
    font-family: 'Roboto Slab', serif;
    font-family: 'Merriweather', serif;
    font-family: 'Open Sans Condensed', sans-serif;
    // font-family: 'Lora', serif;
    // font-family: 'Ubuntu', sans-serif;
    // font-family: 'Playfair Display', serif;
    // font-family: 'Noto Sans', sans-serif;
    // font-family: 'Poppins', sans-serif;
    // font-family: 'PT Serif', serif;
    // font-family: 'Titillium Web', sans-serif;
    // font-family: 'Arimo', sans-serif;
    // font-family: 'Muli', sans-serif;
    // font-family: 'PT Sans Narrow', sans-serif;
    // font-family: 'Encode Sans', sans-serif;
    // font-family: 'Noto Serif', serif;
    // font-family: 'Indie Flower', cursive;
    // font-family: 'Dosis', sans-serif;
    // font-family: 'Nunito', sans-serif;
    // font-family: 'Anton', sans-serif;
    // font-family: 'Inconsolata', monospace;
    // font-family: 'Crimson Text', serif;
    // font-family: 'Bitter', serif;
    // font-family: 'Fira Sans', sans-serif;
    // font-family: 'Alegreya Sans', sans-serif;
    // font-family: 'Archivo', sans-serif;
    // font-family: 'Oxygen', sans-serif;
    // font-family: 'Josefin Sans', sans-serif;
    // font-family: 'Libre Baskerville', serif;
    font-size: 100px;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin: 0;
    text-shadow: 0px 0px 30px #rgba(0,0,0,0.5);
    margin-bottom: 15px;
`
const Description = styled.p`
    max-width: 768px;
    font-size: 18px;
`
const HeroView = styled.div`
    color: #efefef;
    height: 100vh;
    max-height: 600px;
    background: url(/assets/images/home_hero3.png) no-repeat;
    background-size: cover;
    background-position: 86% center;
    display: flex;
    flex-direction: column;
`
export default Hero
