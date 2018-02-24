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
                        title="Pools &amp; Spas"
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

const FIRST_BREAKPOINT = "768px"

/*VIEWS*/
const ActivityView = ({ description, src, title }) => (
    <Activity>
        <AnimatingBox>
            <ImageContainer >
                <Image src={ src } />
                <LearnMoreView title={ title } />
            </ImageContainer>
        </AnimatingBox>
    </Activity>
)
const LearnMoreView = ({ title }) => (
    <LearnMoreContainer>
        <FancyBackground>
            <LearnMoreTitle>{ title }</LearnMoreTitle>
            <LearnMoreLink>Learn More</LearnMoreLink>
        </FancyBackground>
    </LearnMoreContainer>
)

/* STYLES */
const LearnMoreTitle = styled.p`
    margin: 0;
    white-space: nowrap;
    letter-spacing: 1.8px;

    @media(min-width: ${ FIRST_BREAKPOINT }) {
        font-size: 18px;
    }
`
const LearnMoreLink = styled.a`
    margin: 0;
    font-size: 10px;
    margin-top: 5px;
`
const FancyBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${ PRIMARY_COLOR };
    width: 90%;
    
    @media (min-width: 480px) {
        height: 64px;
        background: 
        url(/assets/images/activities/box-bg-left.png) no-repeat left -1px,
        url(/assets/images/activities/box-bg-right.png) no-repeat right -1px;
        box-sizing: border-box;
        border-top: solid thin ${ PRIMARY_COLOR };
        border-bottom: solid thin ${ PRIMARY_COLOR };
    }
`
const LearnMoreContainer = styled.div`
    background-color: rgba(0, 0, 0, .8);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    text-transform: uppercase;    
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;

    @media (min-width: ${ FIRST_BREAKPOINT }) {
        bottom: 15px;
    }
`
const Description = styled.p`
    display: flex;
    align-items: center;
`
const Image = styled.img`
    max-width: 100%;
    width: 100%;
`
const ImageContainer = styled.div`
    position: relative;
    background: ${ SECONDARY_COLOR };
    padding: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`
const AnimatingBox = styled.div`
    background-color: ${ PRIMARY_COLOR };
    padding: 4px;
    box-sizing: border-box;
    border: solid thin ${ SECONDARY_COLOR };
    width: 100%;

    &, > * {
        transition: padding .5s linear;
    }

    &:hover, > *:hover {
        padding: 0;
    }

`
const Activity = styled.div`
    max-width: 700px;
    width: 100%;
    height: 60vw;

    @media (min-width: ${ FIRST_BREAKPOINT }) {
        height: 447px;
    }
    @media(min-width: 1200px) {
        width: 47%;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        margin-bottom: 70px;
    }

    @media (min-width: ${ FIRST_BREAKPOINT }) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`
const ActivitiesView = styled.section``
