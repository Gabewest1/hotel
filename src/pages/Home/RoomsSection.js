import React from "react"
import styled from "styled-components"

export default class RoomsSection extends React.Component {
    render() {
        return (
            <RoomsSectionView { ...this.props }>
                <SectionTitle>Rooms &amp; Suites</SectionTitle>
                <Row>
                    <RoomView
                        src="/assets/images/rooms/room1.jpg"
                        title="Executive Suite"
                        size="800 SQ FT | 75 SQ M"
                        description={`With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath`}
                    />
                    <RoomView
                        src="/assets/images/rooms/room2.jpg"
                        title="Deluxe Suite"
                        size="1000 SQ FT | 93 SQ M"
                        description={`With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath`}                        
                    />
                </Row>
                <Row>
                    <RoomView
                        src="/assets/images/rooms/room3.jpg"
                        title="Club Level Suite"
                        size="1000 SQ FT | 93 SQ M"
                        description={`With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath`}                        
                    />
                    <RoomView
                        src="/assets/images/rooms/room4.jpg"
                        title="Luxury Suite"
                        size="1475 SQ FT | 138 SQ M"
                        description={`With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath`}                        
                    />
                </Row>
          </RoomsSectionView>
        )
    }
}

const Title = styled.h3`
    margin: 0;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: uppercase;
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
    font-size: 12px;
    letter-spacing: 3,px;
    margin-top: 14px;
`
const Image = styled.img`
    max-width: 100%;
    width: 100%;
`
const ImageContainer = styled.div``
const Size = styled.div`
    span {
        margin-right: 10px;
        text-transform: uppercase;
        font-weight: bolder;
    }
`
const Details = styled.div`
    padding: 15px;
`
const Room = styled.div`
    min-width: 300px;
    flex-basis: 40%;
    margin-bottom: 40px;
    box-shadow: 0 0 3px 3px lightgray;
    font-family: 'Montserrat',sans-serif;    
`
const RoomView = ({ description, size, src, title }) => (
    <Room>
        <ImageContainer>
            <Image src={ src } />
        </ImageContainer>
        
        <Details>
            <Title>{ title }</Title>
            <Size><span>Size</span>{ size }</Size>
            <Description>{ description }</Description>
        </Details>
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