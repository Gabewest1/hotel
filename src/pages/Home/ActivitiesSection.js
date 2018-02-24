import React from "react"
import styled from "styled-components"

import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../../constants/index"
import SectionTitle from "./SectionTitle"

export default class Activities extends React.Component {
    render() {
        return (
            <ActivitiesView { ...this.props }>
                <SectionTitle>Activities</SectionTitle>

                <Wrapper>
                    <ActivityView 
                        src="/assets/images/activities/snowboarding.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="Winter Adventures"
                    />

                    <ActivityView 
                        src="/assets/images/activities/games.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="Indoor Entertainment"
                    />

                    <ActivityView 
                        src="/assets/images/activities/pool.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="Pools & Spas"
                    />

                    <ActivityView 
                        src="/assets/images/activities/gym.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                        title="Fitness"
                    />
                </Wrapper>
          </ActivitiesView>
        )
    }
}
const ActivityView = ({ description, src, title }) => (
    <Activity>
        <ImageContainer >
            <Image src={ src } />
            <LearnMoreView title={ title } />
        </ImageContainer>
        <Center>
            <Description>{ description }</Description>
        </Center>
    </Activity>
)
const LearnMoreView = ({ title }) => (
    <LearnMoreContainer>
        <FancyBackground>
            <Title>{ title }</Title>
            <LearnMoreText>Learn More</LearnMoreText>
        </FancyBackground>
    </LearnMoreContainer>
)
const Title = styled.p`
    margin: 0;
`
const LearnMoreText = styled.a`
    margin: 0;
    font-size: 10px;
    margin-top: 5px;
`
const FancyBackground = styled.div`
    background: 
        url(/assets/images/activities/box-bg-left.png) no-repeat left -1px,
        url(/assets/images/activities/box-bg-right.png) no-repeat right -1px;
    box-sizing: border-box;
    border-top: solid thin ${ PRIMARY_COLOR };
    border-bottom: solid thin ${ PRIMARY_COLOR };
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${ PRIMARY_COLOR };
    width: 90%;
    height: 64px;
`
const LearnMoreContainer = styled.div`
    background-color: rgba(0, 0, 0, .8);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    transform: translateY(-115%);
    text-transform: uppercase;    
`
const Description = styled.p`
    display: flex;
    align-items: center;
`
const Image = styled.img`
    max-width: 100%;
`
const ImageContainer = styled.div`
    width: 100vw;
    position: relative;
`
const Activity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        height: 300px;

        ${ Description } {
            margin-bottom: 0;
            max-width: 440px;
        }

        ${ ImageContainer } {
            width: 40%;
        }
    }
`
const Center = styled.div`
    text-align: center;

    @media (min-width: 768px) {
        width: 40%;
        display: flex;
        justify-content: center;
    }
`
const Wrapper = styled.div`
    > * {
        margin-bottom: 70px;
    }

    > *:last-child {
        margin-bottom: 0px;
    }

    @media (min-width: 768px) {
        > * {
            margin-bottom: 120px;
        }

        ${ Activity }:nth-child(2n) {
            flex-direction: row-reverse;
        }
    }
`
const ActivitiesView = styled.section`
    padding-bottom: 50px;
`