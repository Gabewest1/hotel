import React, { Component } from 'react'
import styled from "styled-components"

import Carousel from "../../components/Carousel"
import RoomsSection from "./RoomsSection"
import ContactSection from "./ContactSection"
import ActivitiesSection from "./ActivitiesSection"
import FoodSection from "./FoodSection"

class Home extends Component {
  render() {
    return (
      <HomeView>

        <Carousel />

        <Padding>
          <ContactSection />

          <RoomsSection />

          <ActivitiesSection />

          <FoodSection />
        </Padding>

      </HomeView>
    )
  }
}

const Padding = styled.div`
  padding: 0 15px;
  
  @media(min-width: 768px) {
    padding: 0 30px;

  }
`
const HomeView = styled.div`
`

export default Home
