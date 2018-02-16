import React from "react"
import styled from "styled-components"
import CheckAvailabilityButton from "../CheckAvailabilityButton"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"
import ShowComponent from "../ShowComponent"
import Login from "../Login"

class Navbar extends React.Component {
    state = {
        isExpanded: false
    }

    render() {
        const { isExpanded } = this.state

        return (
            <NavbarView { ...this.props }>
                <TopNavbar>
                    <Wrapper>
                            <ShowComponent breakpoint={[[0, FIRST_QUERY(-1)]]} fitArea={true}>
                                <Login />
                            </ShowComponent>
                                <Link to="/">
                                    <Logo src="/assets/images/logo6.svg" />
                                </Link>
                            
                        <MenuIcon
                            src="/assets/images/menu.svg"
                            onClick={() => this.setState({ isExpanded: ! isExpanded })}    
                        />
                        <ShowComponent breakpoint={ FIRST_QUERY() } flex>
                            <Login />
                            <CheckAvailabilityButton />
                        </ShowComponent>

                    </Wrapper>
                </TopNavbar>


                <BottomNavbar isExpanded={ isExpanded }>
                    <List isExpanded={ isExpanded }>
                        <ShowComponent style={{width: '100%', height: '100%'}} breakpoint={[[0, FIRST_QUERY(-1)]]} fitArea={true}>
                            <Spacer>
                                <CheckAvailabilityListItem>
                                    <CheckAvailabilityButton />
                                </CheckAvailabilityListItem>
                            </Spacer>
                        </ShowComponent>
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

    @media (min-width: ${  FIRST_QUERY() }) {
        display: none;

    }
`


const Wrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center; 
    position: relative;
    right: 1px;
`

const NAV_BAR_STYLE = `
    background-color: transparent;
    box-sizing: border-box;
`

const Logo = styled.img`
`

const ListItem = styled.li`
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.14rem;
    font-family: 'Montserrat', sans-serif;
    height: 13px;   
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    marign: 0;
    padding: 0;

    a { 
        text-align: center;
        width: 100%;
        height: 13px;
        display: inline-block;
        color: ${ LINK_COLOR };
        text-decoration: none;
        
        &:hover { 
            transition: background 0.3s ease-out, opacity 0.3s ease-out, border-color 0.3s ease-out;
            background: linear-gradient(#5e5e5e21, transparent, #5e5e5e21);
            color: #c4b8a7e0;
        }
    }
`

const Spacer = styled.div `
    width: 100%;
    height: 80px;
    top: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NeedToRefactor = styled.div`
    width: 100%;
    height: 67px; 
`   
const CheckAvailabilityListItem = styled.div`
    margin-left: 5%;
    width: 90%;
    padding-bottom: 10px;
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 90%;
    max-width: 1200px;
    transition: all .3s ease-in;

    @media (min-width: ${  FIRST_QUERY(0) }) { 
        height: 40px;
    }
`
    
const TopNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    height: 67px; 
`
const BottomNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    background-color: ${ BOTTOM_NAV_BACKGROUND };
    height: ${({ isExpanded }) => isExpanded ? "461px" : "0px" };
    width: 90%;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.15);
    overflow: hidden;
    transition: height .5s ease-in-out;

    @media (max-width: ${ FIRST_QUERY(-1) }) {
        margin-bottom: ${({ isExpanded }) => isExpanded ? "30px" : "0"};
        background-color: transparent;

        ${ List } {
            border-top: #dcdcdc 1px solid;
            display: block;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: ${ PRIMARY_COLOR };
            
            ${ ListItem } {
                align-self: flex-start;
                font-size: 20px;
                padding: 13px 0;
                padding-left: 7%;
                height: 24px;
                
                a {
                    font-size: 12px;
                    color: black;
                    text-shadow: 0px 0px 10px #78787826;
                    font-family: helvetica;
                    text-align: left;
                    padding-left: 5%;
                    // font-weight: bold;
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

        ${ ListItem } {
            width: 90%;
            max-width: 1176px;
        }
    }
`
const NavbarView = styled.div`
    background:  ${ TOP_NAV_BACKGROUND  };
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: ${({ match }) => match.isExact ? "absolute" : "relative"};
    z-index: 10000;
`


export default Navbar
