import React, { Component } from 'react'
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"

class Events extends Component {
  render() {
    return (
      <EventsView>
        <Title>AYYy LmaO ItS THe Events PAGE</Title>

        <Section>
          <Title>Business Meetings</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>

        <Section>
          <Title>Weddings</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>

        <Section>
          <Title>Social Gatherings</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>


      </EventsView>
    )
  }
}

const Image = styled.img``
const ImageContainer = styled.div``
const Title = styled.h1`

`
const Description = styled.p`

`
const Section = styled.section`

`
const EventsView = styled.div`

`

export default Events
