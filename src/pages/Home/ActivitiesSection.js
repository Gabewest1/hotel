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
                        src="/assets/images/activites/snowboarding.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                    />

                    <ActivityView 
                        src="/assets/images/activites/games.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                    />

                    <ActivityView 
                        src="/assets/images/activites/pool.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                    />

                    <ActivityView 
                        src="/assets/images/activites/gym.jpg"
                        description="With a large bedroom, separate living room, balcony and spa-like bathroom, these elegant suites feature a spaious layout generouus seating and a desk. The bathroom boasts a glass enclosed shower and deep soaking bath"
                    />
                </Wrapper>
          </ActivitiesView>
        )
    }
}
const ActivityView = ({ description, src }) => (
    <Activity>
        <Description>{ description }</Description>
        <Divider />
        <ImageContainer>
            <Image src={ src } />
        </ImageContainer>
    </Activity>
)
const Title = styled.h1`

`
const Description = styled.p`
    display: flex;
    align-items: center;
    
    @media(min-width: 480px) {
        margin-bottom: 0;
        max-width: 250px;
        width: 50%;
    }
`
const Image = styled.img`
    max-width: 100%;
`
const ImageContainer = styled.div`

    @media (min-width: 480px) {
        max-width: 50%;
    }
`
const Divider = styled.div`
    width: 2px;
    background: ${ PRIMARY_COLOR };
    margin: 0 40px;
`
const Activity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 480px) {
        flex-direction: row;
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

    @media (min-width: 480px) {
        ${ Activity }:nth-child(2n) {
            flex-direction: row-reverse;
        }
    }
`
const ActivitiesView = styled.section`
    padding-bottom: 50px;
`