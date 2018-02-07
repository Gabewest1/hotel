import React from "react"
import styled from "styled-components"

class Listing extends React.Component {
    render() {
        const { description, src, title } = this.props

        return (
            <ListingView>
                <ImageContainer>
                    <Image src={ src } />
                </ImageContainer>

                <Title>
                    { title }
                </Title>

                <Description>
                    { description }
                </Description>

                <Button>Reservate</Button>
            </ListingView>
        )
    }
}

const Button = styled.a`
    border: solid thin black;
    border-radius: 7px;
    background: white;
    display: inline-block;
    text-decoration: none;
    padding: 10px 15px;
    color: black;

    &:hover {
        color: white;
        border: solid thin white;
        background: black;
    }
`

const ImageContainer = styled.div`

`
const Image = styled.img`
    display: block;
`
const Description = styled.p`

`
const Title = styled.h1`

`
const ListingView = styled.div`

`

export default Listing
