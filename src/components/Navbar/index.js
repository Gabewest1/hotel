import React from "react"
import styled from "styled-components"
import CheckAvailabilityButton from "../CheckAvailabilityButton"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"
import ShowComponent from "../ShowComponent"

class Navbar extends React.Component {
    state = {
        isExpanded: false
    }

    render() {
        const { isExpanded } = this.state

        return (
            <NavbarView { ...this.props }>

                <Background />

                <TopNavbar>
                    <Link to="/">
                        <Logo src="/assets/images/logo5.svg" />
                    </Link>
                    <Wrapper>
                        <ShowComponent breakpoint={ FIRST_QUERY() }>
                            <LoginWrapper>
                                <LoginButtons>Log In</LoginButtons>
                                <Line />
                                <LoginButtons>Sign Up</LoginButtons>
                            </LoginWrapper>
                            <CheckAvailabilityButton />
                        </ShowComponent>

                        <MenuIcon
                            src="/assets/images/menu.svg"
                            onClick={() => this.setState({ isExpanded: ! isExpanded })}    
                        />
                    </Wrapper>
                </TopNavbar>


                <BottomNavbar isExpanded={ isExpanded }>
                    <List>
                        <CheckAvailabilityListItem><CheckAvailabilityButton /></CheckAvailabilityListItem>
                        <ListItem><Link to="/rooms">Rooms &amp; Suites</Link></ListItem>
                        <ListItem><Link to="">Meetings</Link></ListItem>
                        <ListItem><Link to="/events">Events</Link></ListItem>                        
                        <ListItem><Link to="">Something</Link></ListItem>
                        <ListItem><Link to="/services">Services</Link></ListItem>
                        <ListItem><Link to="">Something</Link></ListItem>
                        <ListItem><Link to="/contact">Contact Us</Link></ListItem>
                    </List>
                </BottomNavbar>
            </NavbarView>
        )
    }
}

const LINK_COLOR = "#ffe5bfe0";
const BOTTOM_NAV_BACKGROUND = SECONDARY_COLOR
const TOP_NAV_BACKGROUND = PRIMARY_COLOR


const MenuIcon = styled.img`
    width: 33px;

    @media (min-width: ${  FIRST_QUERY(0) }) {
        display: none;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    right: 10px;
    top: 6px;
`

const LoginWrapper = styled.div`
    position: relative;
    right: 20px;
    display: flex;
    justify-content: space-between;
`

const LoginButtons = styled.button`
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Muli', sans-serif;
    font-size: 13px;
    &:hover {
        color: ${ TERTIARY_COLOR };
    }
`

const Line = styled.div`
    background-color: ${ SECONDARY_COLOR };
    width: 1px;
    height: 20px;
    position: relative;
    bottom: 1px;
    left: 1px;
    margin: 10px;
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
const HideOnMobile = styled.div`
    display: none;

    @media (min-width: ${  FIRST_QUERY(0) }) {
        display: flex;
    }
`
const Logo = styled.img`
    max-width: 250px;
`
const ListItem = styled.li`
    text-transform: uppercase;
    text-align: center;
    font-size: 11px;
    letter-spacing: 0.14rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 13px;   
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    
    a { 
        width: 100%;
        height: 13px;
        display: inline-block;
        padding: 1em 0em;
        color: ${ LINK_COLOR };
        text-decoration: none;
        
        &:hover { 
            transition: background 0.3s ease-out, opacity 0.3s ease-out, border-color 0.3s ease-out;
            background: linear-gradient(#5e5e5e21, transparent, #5e5e5e21);
            color: #c4b8a7e0;
        }
    }
    `

    const CheckAvailabilityListItem = styled.li`
    `


    const List = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    width: 90%;
    max-width: 1300px;
    box-sizing: border-box;
    padding: 0 1em;
    
    @media (min-width: ${  FIRST_QUERY(0) }) { 
        height: 40px;
        
        ${ ListItem } {
            
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
    height: 67px;
`
const BottomNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    display: ${({ isExpanded }) => isExpanded ? "block" : "none"};    
    height: ${({ isExpanded }) => isExpanded ? "100%" : "0%"};
    background-color: ${ BOTTOM_NAV_BACKGROUND };
    width: 100%;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.15);
    
    @media (max-width: ${ FIRST_QUERY(-1) }) {
        ${ List } {
            // transition: all .3s ease-in;
            margin: initial;
            display: block;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: ${ PRIMARY_COLOR };
            
            ${ ListItem } {
                // width: 100%;                
                font-size: 20px;
                padding: 10px 0;
                height: 31px;
                
                &:first-child {
                    // margin-left: 0;
                }
                
                &:last-child {
                    // margin-right: 0;
                }
                
                a {
                    font-size: 12px;
                    color: ${ SECONDARY_COLOR };
                    font-family: helvetica;
                    text-align: left;
                    padding-left: 5%;
                }
            }
        }
    }

    @media (min-width: ${ FIRST_QUERY(0) }) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35px;

        ${ List } {
            width: 100%;
        }
    }
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
