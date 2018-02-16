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

        <ContactSection />

        <RoomsSection />

        <ActivitiesSection />

        <FoodSection />

      </HomeView>
    )
  }
}

const HomeView = styled.div`
`

export default Home
