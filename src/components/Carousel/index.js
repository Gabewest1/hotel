import React from "react"
import { Carousel as CarouselView } from 'react-responsive-carousel';

import Hero from "../Hero"
 
class Carousel extends React.Component {
  render () {
    return (
      <CarouselView { ...this.props }>
        <div>
            <Hero />
        </div>
        <div>
            <Hero />
        </div>
        <div>
            <Hero />
        </div>
        <div>
            <Hero />
        </div>
        <div>
            <Hero />
        </div>
      </CarouselView>
    );
  }
}

export default Carousel
