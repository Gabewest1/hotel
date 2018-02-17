import React from "react"
import styled from "styled-components"

export default class RoomsSection extends React.Component {
    render() {
        return (
            <RoomsSectionView { ...this.props }>
                <RoomView src="/assets/images/filler.jpg" />
          </RoomsSectionView>
        )
    }
}
const Title = styled.h1`

`
const Description = styled.p`

`
const Image = styled.img``
const ImageContainer = styled.div``
const Room = styled.div`

`

const RoomView = props => (
    <Room>
        <ImageContainer>
            <Image src={ props.src } />
        </ImageContainer>
        <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
        </Description>
    </Room>
)
const RoomsSectionView = styled.section`

`