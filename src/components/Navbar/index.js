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
            </NavbarView>
        )
    }
}

const List = styled.ul`
    display: flex;
    list-style: none;
    border-bottom: solid thin black;
    height: 70px;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
`

const ListItem = styled.li`

`

const NavbarView = styled.div`

`

export default Navbar
