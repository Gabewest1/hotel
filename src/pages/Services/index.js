import React, { Component } from 'react'
import styled from "styled-components"

class Services extends Component {
  render() {
    return (
      <ServicesView>
        <Title>Services Page</Title>

        <Section>
          <Title>Food</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>

        <Section>
          <Title>Gym</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>

        <Section>
          <Title>Pool</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>

        <Section>
          <Title>Bar</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus qui tempore iste doloremque dignissimos temporibus dolor modi, reiciendis animi tenetur eveniet facere expedita dicta dolorem. Quasi soluta iusto ea.
          </Description>
        </Section>
      </ServicesView>
    )
  }
}

const Title = styled.h1`

`
const Description = styled.p`

`
const Image = styled.img``
const ImageContainer = styled.div``
const Section = styled.section`

`
const ServicesView = styled.div`

`

export default Services
