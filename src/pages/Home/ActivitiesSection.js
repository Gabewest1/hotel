import React from "react"
import styled from "styled-components"

export default class Activities extends React.Component {
    render() {
        return (
            <ActivitiesView { ...this.props }>
                <Title>Rooms Section</Title>
                <ImageContainer>
                    <Image src="/assets/images/filler.jpg"/>
                </ImageContainer>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
                </Description>
          </ActivitiesView>
        )
    }
}
const Title = styled.h1`

`
const Description = styled.p`

`
const Image = styled.img``
const ImageContainer = styled.div``
const ActivitiesView = styled.section`

`