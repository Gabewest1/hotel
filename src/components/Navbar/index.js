import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <NavbarView>
                <List>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="/contact">Contact Us</Link></ListItem>
                    <ListItem><Link to="/events">Meetings &amp; Events</Link></ListItem>
                    <ListItem><Link to="/rooms">Rooms &amp; Suites</Link></ListItem>
                    <ListItem><Link to="/services">Services</Link></ListItem>
                </List>
                <div>
                    <BookRoomButton to="/listings">Check Availability</BookRoomButton>
                </div>
            </NavbarView>
        )
    }
}

const BookRoomButton = styled.button`

`

const ListItem = styled.li`

`
const List = styled.ul`
    display: flex;
    list-style: none;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    ${ ListItem } {
        margin: 0 15px;

        &:first-child {
            margin-left: 0;
        }
        
        &:last-child {
            margin-right: 0;
        }
    }
`

const NavbarView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid thin black;    
    padding: 0 15px;
`

export default Navbar
