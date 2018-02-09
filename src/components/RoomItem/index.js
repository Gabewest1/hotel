import React from "react"
import styled from "styled-components"

class RoomItem extends React.Component {
    render() {
        const { description, src,title } = this.props

        return (
            <RoomItemView { ...this.props }>
                <ImageContainer>
                    <Image src={ src } />
                </ImageContainer>
                <Title>{ title }</Title>
                <Description>{ description }</Description>
            </RoomItemView>
        )
    }
}

const Description = styled.p`

`
const ImageContainer = styled.div``
const Image = styled.img``
const Title = styled.h1`

`
const RoomItemView = styled.div`

`

export default RoomItem
