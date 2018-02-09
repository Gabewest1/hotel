import React, { Component } from 'react'
import styled from "styled-components"

import RoomItem from "../../components/RoomItem"
import roomData from "./data"

class Rooms extends Component {
  render() {
    const listings = roomData.map(({ description, src, title }) => (
      <RoomItem
          description={ description }
          src={ src }
          title={ title }
      />
    ))

    return (
      <RoomsView>
        { listings }
      </RoomsView>
    )
  }
}


const RoomsView = styled.div`

`

export default Rooms
