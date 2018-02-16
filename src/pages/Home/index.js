import React, { Component } from 'react'
import styled from "styled-components"

import Hero from "../../components/Hero"

class Home extends Component {
  render() {
    return (
      <HomeView>
                
        <Hero />

        <ContactSection>
          <Description>
            <Address1>3801 Stark Hollow Road</Address1>
            <Address2>Denver, CO</Address2>
            
            <Phone>
              (555) 555-9900
            </Phone>
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
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  margin-top: 7em;
  padding: 0em 2em;
  line-height: 25px;
  font-family: Helvetica;
  font-size: 15px;
  letter-spacing: 0.12rem;
  width: 300px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  border-bottom: #b9b9b9 1px solid;
  text-transform: uppercase;
  border-top: #b9b9b9 1px solid;
  `
  
const Address1 = styled.div`
  font-family: 'Montserrat', sans-serif;  
`
const Address2 = styled.div`
  font-size: 12px;
`

const Phone = styled.div`
  font-weight: 500;
  padding-top: 1em;
  color: #333;
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
