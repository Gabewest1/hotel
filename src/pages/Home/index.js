import React, { Component } from 'react'
import styled from "styled-components"

import Hero from "../../components/Hero"

class Home extends Component {
  render() {
    return (
      <HomeView>
                
        <Hero />

        <ContactSection>
          <Title>Contact Section</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
          </Description>
        </ContactSection>

        <RoomsSection>
          <Title>Rooms Section</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
          </Description>
        </RoomsSection>

        <ActivitiesSection>
          <Title>Activites Section</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
          </Description>
        </ActivitiesSection>

        <FoodSection>
          <Title>Food Section</Title>
          <ImageContainer>
            <Image src="/assets/images/filler.jpg"/>
          </ImageContainer>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maxime itaque. Dolorem veniam veritatis eum consectetur molestias non saepe, perspiciatis odio suscipit ipsam tempore omnis quaerat iste maiores eligendi. Facilis.
          </Description>
        </FoodSection>

      </HomeView>
    )
  }
}

const SectionStyles = `

`
const Title = styled.h1`

`
const Description = styled.p`

`
const Image = styled.img``
const ImageContainer = styled.div``
const ContactSection = styled.section`
  ${ SectionStyles }  
`
const RoomsSection = styled.section`
  ${ SectionStyles }
`
const ActivitiesSection = styled.section`
  ${ SectionStyles }
`
const FoodSection = styled.section`
  ${ SectionStyles }
`
const HomeView = styled.div`
  ${ SectionStyles }
`

export default Home
