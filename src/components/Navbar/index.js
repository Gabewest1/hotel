import React from "react"
import styled from "styled-components"
import CheckAvailabilityButton from "../CheckAvailabilityButton"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from "../../constants/index"

class Navbar extends React.Component {
    render() {
        console.log("STYLE:", this.props.style)
        
        return (
            <NavbarView { ...this.props }>

                <Background />

                <TopNavbar>
                    <Link to="/">
                        <Logo src="/assets/images/logo5.svg" />
                    </Link>
                    <Wrapper>
                        <LoginWrapper>
                            <Button>Log In</Button>
                            <Line />
                            <Button>Sign Up</Button>
                        </LoginWrapper>
                        <CheckAvailabilityButton />
                    </Wrapper>
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
const BOTTOM_NAV_BACKGROUND = SECONDARY_COLOR
const TOP_NAV_BACKGROUND = PRIMARY_COLOR

const Wrapper = styled.div`
    // height: 24px;
    width: 420px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const LoginWrapper = styled.div`
    // width: 170px;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    width: 75px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    // font-family: 'Montserrat', sans-serif;    
    font-family: 'Rammetto One', cursive;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Lato', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'Slabo 27px', serif;
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Dhurjati', sans-serif;
    font-family: 'Raleway', sans-serif;
    font-family: 'PT Sans', sans-serif;
    font-family: 'Roboto Slab', serif;
    font-family: 'Merriweather', serif;
    font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Lora', serif;
    font-family: 'Ubuntu', sans-serif;
    font-family: 'Playfair Display', serif;
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'PT Serif', serif;
    font-family: 'Titillium Web', sans-serif;
    font-family: 'Arimo', sans-serif;
    font-family: 'Muli', sans-serif;
    font-family: 'PT Sans Narrow', sans-serif;
    font-family: 'Encode Sans', sans-serif;
    font-family: 'Noto Serif', serif;
    // font-family: 'Indie Flower', cursive;
    // font-family: 'Dosis', sans-serif;
    // font-family: 'Nunito', sans-serif;
    // font-family: 'Anton', sans-serif;
    // font-family: 'Inconsolata', monospace;
    // font-family: 'Crimson Text', serif;
    // font-family: 'Bitter', serif;
    // font-family: 'Fira Sans', sans-serif;
    // font-family: 'Alegreya Sans', sans-serif;
    // font-family: 'Archivo', sans-serif;
    // font-family: 'Oxygen', sans-serif;
    font-family: 'Josefin Sans', sans-serif;
    // font-family: 'Libre Baskerville', serif;

    font-size: 13px;
    // font-weight: bold;    
    // text-transform: uppercase;
    // letter-spacing: 1px;
    &:hover {
        color: ${ TERTIARY_COLOR };
    }
`

const Line = styled.div`
    background-color: ${ SECONDARY_COLOR };
    width: 1px;
    height: 23px;
    position: relative;
    right: 3px;
    bottom: 1px;
`


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
    height: 75px;
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
    background:  ${ TOP_NAV_BACKGROUND  };
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    position: ${({ match }) => match.isExact ? "absolute" : "relative"};
    z-index: 1;
`

export default Navbar
