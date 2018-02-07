import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <NavbarView>
                <TopNavbar>
                    <Logo src="/assets/images/logo.svg" />
                </TopNavbar>
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

const BookRoomButton = styled(Link)`
    border: solid thin black;
    border-radius: 7px;
    background: white;
    text-decoration: none;
    padding: 10px 15px;
    color: black;

    &:hover {
        color: white;
        border: solid thin white;
        background: black;
    }
`
const Logo = styled.img`
    max-width: 250px;
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
    padding: 0 15px;
    

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

const TopNavbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .4);
    width: 100%;
`

const NavbarView = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: solid thin black;    
`

export default Navbar
