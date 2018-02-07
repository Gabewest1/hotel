import React, { Component } from 'react'
import styled from "styled-components"

class Home extends Component {
  render() {
    return (
      <HomeView>
        AYYY LMAO ITS THE HOME PAGE
        
        <ContactSection>
          Contact Section
        </ContactSection>

        <RoomsSection>
          Rooms Section
        </RoomsSection>

        <ActivitiesSection>
          Activites Section
        </ActivitiesSection>

        <FoodSection>
          Food Section
        </FoodSection>

      </HomeView>
    )
  }
}

const SectionStyles = `
  height: 200px;
`
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
