import React from "react"
import styled from "styled-components"
import CheckAvailabilityButton from "../CheckAvailabilityButton"
import { Link } from "react-router-dom"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"
import ShowComponent from "../ShowComponent"
import Login from "../Login"

class Navbar extends React.Component {
    state = {
        isExpanded: true
    }

    render() {
        const { isExpanded } = this.state

        return (
            <NavbarView { ...this.props }>
                <TopNavbar>
                    <ShowComponent breakpoint={ FIRST_QUERY() } flex>
                        <Login/>
                    </ShowComponent>

                    <ShowComponent breakpoint={[[700, FIRST_QUERY(-1)]]}>
                        <CheckAvailabilityButton style={{marginTop: '5px'}}/>
                    </ShowComponent>

                    <_Link to="/">
                        <Logo src="/assets/images/logo9.svg" />
                    </_Link>
                    
                    <MenuIcon
                        src="/assets/images/menu.svg"
                        onClick={() => this.setState({ isExpanded: ! isExpanded })}    
                    />

                    <ShowComponent breakpoint={ FIRST_QUERY() } flex>
                        <CheckAvailabilityButton />
                    </ShowComponent>

                </TopNavbar>


                <BottomNavbar isExpanded={ isExpanded }>
                    <List isExpanded={ isExpanded }>
                        <ShowComponent style={{width: '100%', height: '100%'}} breakpoint={[[0, 700]]}>
                            <CheckAvailabilityButton style={{width: '90%', height: '100%', marginTop: '10px', margin: '10px auto'}} />
                        </ShowComponent>
                        <ShowComponent style={{width: '100%', height: '100%'}} breakpoint={[[0, FIRST_QUERY(-1)]]}>
                            <Spacer>
                                <LoginListItem>
                                    <Login/>
                                </LoginListItem>
                            </Spacer>
                        </ShowComponent>
                        <ListItem><Link style={{textAlign: 'left'}} to="/rooms">Rooms &amp; Suites</Link></ListItem>
                        <ListItem><Link to="">Meetings</Link></ListItem>
                        <ListItem><Link to="/events">Events</Link></ListItem>                        
                        <ListItem><Link to="">Something</Link></ListItem>
                        <ListItem><Link to="/services">Services</Link></ListItem>
                        <ListItem><Link to="">Something Else</Link></ListItem>
                        <ListItem><Link style={{textAlign: 'right'}} to="/contact">Contact Us</Link></ListItem>
                    </List>
                </BottomNavbar>
            </NavbarView>
        )
    }
}

const LINK_COLOR = "#ffe5bfe0"
const BOTTOM_NAV_BACKGROUND = SECONDARY_COLOR
const TOP_NAV_BACKGROUND = PRIMARY_COLOR

const TopNavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`
const _Link = styled(Link)`
    position: absolute;
    left: 49.5%;
    transform: translateX(-50%);

    @media(max-width: 699px) {
        position: static;
        transform: none;
    }
`

const MenuIcon = styled.img`
    width: 33px;

    @media (min-width: ${  FIRST_QUERY() }) {
        display: none;

    }
`

const NAV_BAR_STYLE = `
    background-color: transparent;
    box-sizing: border-box;
`

const Logo = styled.img``

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
    height: 33px;
    display: flex;
    align-items: center
    justify-content: flex-end;

`
  
const LoginListItem = styled.div`
    width: 100%;
    border-top: #ffe5bf33 1px solid;
    padding: 0.35em 2em;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 95%;
    max-width: 1400px;
    
    @media (min-width: ${  FIRST_QUERY() }) { 
        height: 40px;
        transition: all .3s ease-in;
    }
`
    
const TopNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 85px; 
    box-sizing: border-box;
`

const BottomNavbar = styled.div`
    ${ NAV_BAR_STYLE }
    background-color: ${ BOTTOM_NAV_BACKGROUND };
    height: ${({ isExpanded }) => isExpanded ? "405px" : "0px" };
    width: 95%;
    overflow: hidden;
    transition: height .5s ease-in-out;
    box-sizing: border-box;

    
    @media (max-width: 699px) {
        height: ${({ isExpanded }) => isExpanded ? "455px" : "0px" };
    }

    @media (max-width: ${ FIRST_QUERY(-1) }) {
        background-color: transparent;

        ${ List } {
            background-color: ${ BOTTOM_NAV_BACKGROUND };
            border-top: #dcdcdc 1px solid;
            display: block;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            
            ${ ListItem } {
                text-align: center;
                font-size: 20px;
                padding: 13px 0;
                padding-left: 4%;
                height: 24px;
                
                a {
                    font-size: 12px;
                    text-shadow: 0px 0px 10px #78787826;
                    font-family: helvetica;
                    text-align: left;
                    padding-left: 5%;
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
