import React from "react"
import styled from "styled-components"

export default class RoomsSection extends React.Component {
    render() {
        return (
            <RoomsSectionView { ...this.props }>
                <SectionTitle>Rooms &amp; Suites</SectionTitle>
                <Row>
                    <RoomView
                        src="/assets/images/filler.jpg"
                        title="Junior Suite"
                    />
                    <RoomView
                        src="/assets/images/filler.jpg"
                        title="Deluxe Suite" 
                    />
                </Row>
                <Row>
                    <RoomView
                        src="/assets/images/filler.jpg"
                        title="Club Level Suite"
                    />
                    <RoomView
                        src="/assets/images/filler.jpg"
                        title="Luxury Suite"
                    />
                </Row>
          </RoomsSectionView>
        )
    }
}
const Title = styled.h3`
    margin: 0;
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    margin-bottom: 15px;
`
const SectionTitle = styled.h1`
    margin: 60px auto;
    padding-bottom: 30px;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-size: 48px;
    border-bottom: thin solid #b9b9b9;
    width: 80%;
    letter-spacing: 7px;
`
const Description = styled.p`
    font-family: montserrat, sans-serif;
    margin: 0;
`
const Image = styled.img`
    max-width: 100%;
    width: 100%;
`
const ImageContainer = styled.div``
const Room = styled.div`
    min-width: 300px;
    flex-basis: 40%;
    margin-bottom: 40px;
`

const RoomView = props => (
    <Room>
        <ImageContainer>
            <Image src={ props.src } />
        </ImageContainer>
        <Title>Delux Suite</Title>
        <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
        </Description>
    </Room>
)
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
const RoomsSectionView = styled.section`
`