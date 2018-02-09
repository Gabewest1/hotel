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
                    <div style={{width: '90%', maxWidth: 1200}}>
                        <List>
                            <ListItem><Link to="/contact">Contact Us</Link></ListItem>
                            <ListItem><Link to="/events">Meetings &amp; Events</Link></ListItem>
                            <ListItem><Link to="/rooms">Rooms &amp; Suites</Link></ListItem>
                            <ListItem><Link to="/services">Contact Us</Link></ListItem>
                            <ListItem><Link to="">Services</Link></ListItem>
                            <ListItem><Link to="">Contact Us</Link></ListItem>
                            <ListItem><Link to="">Rooms</Link></ListItem>
                        </List>
                    </div>
                </BottomNavbar>
            </NavbarView>
        )
    }
}

const LINK_COLOR = "#fcfcfc;"
const BOTTOM_NAV_BACKGROUND = "#080808";
const NAV_BAR_STYLE = `
    background-color: transparent;
    box-sizing: border-box;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(#000, #2d2d2d);
    height: 100%;
`

const BookRoomButton = styled(Link)`
    border: solid thin #4c0505;
    border-radius: 1px;
    background: #fdfdfd;
    text-decoration: none;
    letter-spacing: 0.16rem;
    text-transform: uppercase;
    color: #4c0505;
    display: inline-block;
    width: 252px;
    height: 33px;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
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
    font-size: 11px;
    letter-spacing: 0.1rem;
    font-family: 'Montserrat', sans-serif;    
    a {
        color: ${ LINK_COLOR };
        text-decoration: none;
        &:hover { 
            // text-decoration: underline;
            color: #ed1616;
            font-weight: bold;
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
    width: 90%;
    max-width: 1200px;
    height: 74px;
`
const BottomNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    background-color: ${ BOTTOM_NAV_BACKGROUND };
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
`
const NavbarView = styled.div`
    background: #fefbd000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export default Navbar
