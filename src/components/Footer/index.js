import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from "../../constants/index"
import { Link } from "react-router-dom"


class Footer extends React.Component {
    render() {
        return (
            <FooterView>
                <ItemsContainer>

                    <LogoWrapper>
                        <Link to="/">
                            <Logo src="/assets/images/logo5alt.svg" />
                        </Link>
                        <SocialMediaView />                    
                    </LogoWrapper>

                    <Links>

                        <LineAbove />

                        <List>
                            <ListItem><Link to="">Contact Us</Link></ListItem>
                            <ListItem><Link to="">Meetings &amp; Events</Link></ListItem>
                            <ListItem><Link to="">Rooms &amp; Suites</Link></ListItem>
                            <ListItem><Link to="">Rooms</Link></ListItem>
                        </List>

                        <Line />

                        <HideOnMobile>
                            <Copyright>© Hotel Concepts 2018</Copyright>
                        </HideOnMobile>

                    </Links>
                    
                    <HideOnMobile>
                        <SocialMediaView />
                    </HideOnMobile>
                </ItemsContainer>

                <ShowOnMobile>
                    <Copyright>© Hotel Concepts 2018</Copyright>                    
                </ShowOnMobile>
            </FooterView>
        )
    }
}
const TABLET_BREAKPOINT = 700
const DESKTOP_BREAKPOINT = 1024

const Icon = styled.a`
    width: 30px;
    height: 30px;
`

const Copyright = styled.div`
    color: #635c45;    
    font-size: 14px;
    letter-spacing: 1px;
    font-family: 'Anton', sans-serif;
    margin-top: 30px;

    @media (max-width: ${ TABLET_BREAKPOINT - 1 }px) {
        margin-top: 10px;
    }
`

const List = styled.ul`
    font-family: 'Montserrat', sans-serif; 
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    list-style: none; 
    padding: 5px 0;
    margin: 0;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    @media (min-width: ${ TABLET_BREAKPOINT }px) {
        width: 350px;
    }

    @media (min-width: ${ DESKTOP_BREAKPOINT }px) {
        flex-direction: row;
        width: 500px;
    }
` 
    
const ListItem = styled.li`
    padding: 5px 0;
    white-space: nowrap;

    a {
        text-decoration: none;  
        color: #635c45;
        font-weight: bold;
    }
`

const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: #635c45;
    position: relative;
`
const LineAbove = styled(Line)`
    @media (min-width: ${ DESKTOP_BREAKPOINT }px) {
        display: none;
    }
`

const Logo = styled.img`
    max-width: 250px;
`

const Links = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${ TABLET_BREAKPOINT - 1 }px) {
        width: 90%;
    }
`
const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
`

const ItemsContainer = styled.div`
    height: 50%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;

    @media (min-width: ${ TABLET_BREAKPOINT }px) {
        flex-direction: row;
    }
`
const HideOnMobile = styled.div`
    display: none;

    @media (min-width: ${ DESKTOP_BREAKPOINT }px) {
        display: block;
    }
`
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ SocialMedia } {
        position: relative;
        top: 10px;
    }
    @media (max-width: ${ TABLET_BREAKPOINT - 1 }px) {
        margin-bottom: 45px;
    }
    @media (min-width: ${ DESKTOP_BREAKPOINT }px) {
        ${ SocialMedia } {
            display: none;
        }
    }
`
const ShowOnMobile = styled.div`
    @media (min-width: ${ DESKTOP_BREAKPOINT }px) {
        display: none;
    }
`
const FooterView = styled.div` 
    color: white;
    background-color: ${ SECONDARY_COLOR };
    padding: 60px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: ${ TABLET_BREAKPOINT - 1 }px) {
        padding-top: 40px;
        padding-bottom: 15px;
    }
`
const SocialMediaView = () => (
    <SocialMedia>
        <Icon>
            <Logo src="/assets/images/facebook.svg" />
        </Icon>
        <Icon>
            <Logo src="/assets/images/twitter.svg" />
        </Icon>
        <Icon>
            <Logo src="/assets/images/Instagram.svg" />
        </Icon>
    </SocialMedia>
)

export default Footer
