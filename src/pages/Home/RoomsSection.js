import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY, SECOND_QUERY} from "../../constants/index"
import SectionTitle from './SectionTitle'

export default class RoomsSection extends React.Component {
    render() {
        return (
            <RoomsSectionView { ...this.props }>
                <SectionTitle>Rooms <span>&amp;</span> Suites</SectionTitle>
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
    text-transform: uppercase;
`

const Description = styled.p`
    font-family: montserrat, sans-serif;
    margin: 0;
    font-size: 12px;
    line-height: 29px;    
`
const Image = styled.img`
    max-width: 100%;
    width: 100%;
`
const ImageContainer = styled.div`
    background: url(${({ src }) => src}) no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 200px;
`
const Size = styled.div`
    span {
        margin-right: 10px;
        text-transform: uppercase;
        font-weight: bolder;
    }
`
const Details = styled.div`
    padding: 15px;

    > * {
        margin-bottom: 15px;
    }

    > *:last-child {
        margin-bottom: 0;
    }
`
const MoreInfo = styled(Link)`

`
const Room = styled.div`
    margin-bottom: 40px;
    box-shadow: 0 0 3px 3px lightgray;
    font-family: 'Montserrat',sans-serif;

    @media (min-width: 768px) {
        flex-basis: 47%;
    }
`
const RoomView = ({ description, size, src, title }) => (
    <Room>
        <ImageContainer src={ src } />
        
        <Details>
            <Title>{ title }</Title>
            <Description>{ description }</Description>
            <Size><span>Size</span>{ size }</Size>
        </Details>
    </Room>
)
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const RoomsSectionView = styled.section`
`
