import React from "react"
import styled from "styled-components"
import { Carousel as CarouselView } from 'react-responsive-carousel';

import Hero from "../Hero"
 
class Carousel extends React.Component {
  render () {
    return (
      <_CarouselView { ...this.props }>
        <Hero url='/assets/images/mountain.png'/>
        <Hero url='/assets/images/home_hero5.png'/>
        <Hero url='/assets/images/home_hero7.png'/>
        <Hero url='/assets/images/hero8.png' />
        <Hero url='/assets/images/potentials/potential1.png' />
      </_CarouselView>
    )
  }
}

const _CarouselView = styled(CarouselView)`
    .control-dots {
        padding: 0;
    }
`

export default Carousel
