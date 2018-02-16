import React from "react"
import styled from "styled-components"
import { Carousel as CarouselView } from 'react-responsive-carousel';

import Hero from "../Hero"
 
class Carousel extends React.Component {
  render () {
    return (
      <_CarouselView { ...this.props }>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
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
