import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <NavbarView>

                <Background />

                <TopNavbar>
                    <Link to="/">
                        <Logo src="/assets/images/logo5.svg" />
                    </Link>

                    <BookRoomButtonContainer>
                        <BookRoomButton to="/listings">Check Availability</BookRoomButton>
                    </BookRoomButtonContainer>
                </TopNavbar>

                <BottomNavbar>
                    <List>
                        <ListItem><Link to="/contact">Contact Us</Link></ListItem>
                        <ListItem><Link to="/events">Meetings &amp; Events</Link></ListItem>
                        <ListItem><Link to="/rooms">Rooms &amp; Suites</Link></ListItem>
                        <ListItem><Link to="/services">Services</Link></ListItem>
                    </List>
                </BottomNavbar>
            </NavbarView>
        )
    }
}

const LINK_COLOR = "#fcfcfc;"
const BOTTOM_NAV_BACKGROUND = "#770000";
const NAV_BAR_STYLE = `
    background-color: #ccc;
    box-sizing: border-box;
    padding: 0 15px;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(#000, #2d2d2d);
    height: 100%;
`

const BookRoomButton = styled(Link)`
    border: solid thin black;
    border-radius: 6px;
    background: white;
    text-decoration: none;
    // padding: 10px 15px;
    color: black;
    display: inline-block;
    width: 234px;
    height: 35px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: white;
        border: solid thin white;
        background: black;
    }
`
const BookRoomButtonContainer = styled.div`

`
const Logo = styled.img`
    max-width: 250px;
`
const ListItem = styled.li`
    text-transform: uppercase;
    margin: 0;
    font-size: 13px;
    letter-spacing: 0.06rem;
    a {
        color: ${ LINK_COLOR };
        text-decoration: none;
        &:hover { 
            text-decoration: underline;
        }
    }
`
const List = styled.ul`
    display: flex;
    list-style: none;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    padding: 0;
    height: 40px;
    
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
    ${ NAV_BAR_STYLE }
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
`
const BottomNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    background-color: ${ BOTTOM_NAV_BACKGROUND };
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const NavbarView = styled.div`
    background: #9e3b24;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export default Navbar
