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
                        <_Link to="/">
                            <Logo src="/assets/images/logo5alt.svg" />
                        </_Link>
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

                        <Copyright>© Hotel Concepts 2018</Copyright>
                    </Links>
                    
                    <HideOnMobile>
                        <SocialMediaView />
                    </HideOnMobile>
                </ItemsContainer>
            </FooterView>
        )
    }
}
const Icon = styled.a`
    width: 30px;
    height: 30px;
`

const Copyright = styled.div`
    width: 100%;
    position: relative;
    top: 65px;
    color: #635c45;    
    font-size: 14px;
    letter-spacing: 1px;
    font-family: 'Anton', sans-serif;
`

const List = styled.ul`
    font-family: 'Montserrat', sans-serif; 
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    list-style: none; 
    padding: 0;
    margin: 0;
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 10px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
` 
    
const ListItem = styled.li`
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
    top: 10px;
`
const LineAbove = styled(Line)`
    @media (min-width: 1024px) {
        display: none;
    }
`

const Logo = styled.img`
    max-width: 250px;
`

const _Link = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 0 0 20%;       
    position: relative;
    right: 45px;
`

const Links = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 0 0 52%;   
`
const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 34px;
    flex: 0 0 20%;           
`

const ItemsContainer = styled.div`
    height: 50%;
    width: 88%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 10px;
`
const HideOnMobile = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`
const LogoWrapper = styled.div`
    text-align: center;

    @media (min-width: 1024px) {
        ${ SocialMedia } {
            display: none;
        }
    }
`
const FooterView = styled.div` 
    color: white;
    width: 100%;
    height: 220px;
    background-color: ${ SECONDARY_COLOR };
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const SocialMediaView = () => (
    <SocialMedia>
        <Icon>
            <Logo src="/assets/images/facebook.svg" />
        </Icon>
        <Icon>
            <Logo src="/assets/images/twitter.svg" />
        </Icon>
            <Logo src="/assets/images/Instagram.svg" />
        <Icon>
        </Icon>
    </SocialMedia>
)

export default Footer
