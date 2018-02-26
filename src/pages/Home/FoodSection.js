import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SECONDARY_COLOR } from "../../constants"

import SectionTitle from "./SectionTitle"

export default class FoodSection extends React.Component {
    render() {
        return (
            <FoodSectionView { ...this.props }>
                <SectionTitle>Dine &amp; Wine</SectionTitle>
                <Wrapper>
                    <FoodView 
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="5 Star Dining"
                        src="/assets/images/food/5-star-dining.jpg"
                        link="Read More"
                    />
                    <FoodView 
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="Open Bar"
                        src="/assets/images/food/bar.jpg"
                        link="Read More"
                    />
                    <FoodView 
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="All Day Room Service"
                        src="/assets/images/food/room-service.jpg"
                        link="Read More"
                    />
                </Wrapper>
          </FoodSectionView>
        )
    }
}

const FoodView = ({ description, src, title, link }) => (
    <Food>
        <Image src={ src } />
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <_Link to="food">{ link }</_Link>
    </Food>
)

const Food = styled.div`
    width: 300px;
`

const Title = styled.h1`
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 16px;
    text-decoration: underline;
`
const Description = styled.p`
    margin-top: 0;
`
const Image = styled.div`
    background: url(${({ src }) => src}) no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
`
const _Link = styled(Link)`
    color: ${ SECONDARY_COLOR };
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`
const FoodSectionView = styled.section`
    padding-bottom: 35px;
`