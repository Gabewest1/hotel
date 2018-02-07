import React, { Component } from 'react'
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"

import Listing from "../../components/Listing"

import listingData from "./data"

class Listings extends Component {
  render() {
    
    const listings = listingData.map(({ description, src, title }) => (
        <Listing
            description={ description }
            src={ src }
            title={ title }
        />
    ))

    return (
      <ListingsView>
        { listings }
      </ListingsView>
    )
  }
}

const ListingsView = styled.div`

`

export default Listings
