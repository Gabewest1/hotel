import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"

class Hero extends React.Component {
    render() {
        return (
            <HeroView { ...this.props }>
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
`
const Title = styled.div`
    padding-bottom: 25px;
`
const Description = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    max-width: 768px;
    font-size: 14px;
    color: #f0f0f0b0;
`
const H1Vector = styled.img`
    max-width: 300px;

    @media (min-width: ${ FIRST_QUERY() }) {
        max-width: 500px;
    }
`

const HeroView = styled.div`
    color: #efefef;
    height: 100vh;
    max-height: 600px;
    background: url(${ ({ url }) =>  url }) no-repeat;
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

// const url = this.props.url
// const height = this.props.height
// const width = this.props.width

// const { url, height, width } = this.props

// let a = { name: "g", age: 2 }
// let b = { hey: "hi", cockSize: 6}

// ay(a, b, { yolo: 3})
// function ay({ name, age }, { hey, cockSize }, c) {
//     c.yolo
// }