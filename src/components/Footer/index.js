import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from "../../constants/index"
import { Link } from "react-router-dom"


class Footer extends React.Component {
    render() {
        return (
            <FooterView>
                <ItemsContainer>
                    <_Link to="/">
                        <Logo src="/assets/images/logo5alt.svg" />
                    </_Link>
                    <Links>
                        <List>
                            <ListItem><Link to="">Contact Us</Link></ListItem>
                            <ListItem><Link to="">Meetings &amp; Events</Link></ListItem>
                            <ListItem><Link to="">Rooms &amp; Suites</Link></ListItem>
                            <ListItem><Link to="">Rooms</Link></ListItem>
                        </List>
                        <Line>
                        </Line>
                        <Copyright>© Hotel Concepts 2018</Copyright>
                    </Links>
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
// background-color: green;
    width: 100%;
    position: relative;
    top: 65px;
    color: #635c45;    
    font-size: 14px;
    letter-spacing: 1px;
    font-family: 'Rammetto One', cursive;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Lato', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    // font-family: 'Montserrat', sans-serif;
    font-family: 'Oswald', sans-serif;
    // font-family: 'Slabo 27px', serif;
    // font-family: 'Source Sans Pro', sans-serif;
    // font-family: 'Dhurjati', sans-serif;
    // font-family: 'Raleway', sans-serif;
    // font-family: 'PT Sans', sans-serif;
    // font-family: 'Roboto Slab', serif;
    // font-family: 'Merriweather', serif;
    // font-family: 'Open Sans Condensed', sans-serif;
    // font-family: 'Lora', serif;
    // font-family: 'Ubuntu', sans-serif;
    // font-family: 'Playfair Display', serif;
    // font-family: 'Noto Sans', sans-serif;
    // font-family: 'Poppins', sans-serif;
    // font-family: 'PT Serif', serif;
    // font-family: 'Titillium Web', sans-serif;
    // font-family: 'Arimo', sans-serif;
    // font-family: 'Muli', sans-serif;
    // font-family: 'PT Sans Narrow', sans-serif;
    // font-family: 'Encode Sans', sans-serif;
    // font-family: 'Noto Serif', serif;
    // font-family: 'Indie Flower', cursive;
    // font-family: 'Dosis', sans-serif;
    // font-family: 'Nunito', sans-serif;
    font-family: 'Anton', sans-serif;
    // font-family: 'Inconsolata', monospace;
    // font-family: 'Crimson Text', serif;
    // font-family: 'Bitter', serif;
    // font-family: 'Fira Sans', sans-serif;
    // font-family: 'Alegreya Sans', sans-serif;
    // font-family: 'Archivo', sans-serif;
    // font-family: 'Oxygen', sans-serif;
    // font-family: 'Josefin Sans', sans-serif;
    // font-family: 'Libre Baskerville', serif;
`

const List = styled.ul`
// background-color: red;
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
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 10px;
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


const Logo = styled.img`
    max-width: 250px;
`

const _Link = styled(Link)`
// background-color: yellow;
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
// background-color: blue;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 34px;
    flex: 0 0 20%;           
`

const ItemsContainer = styled.div`
// background-color: purple;
    height: 50%;
    width: 88%;
    max-width: 1200px;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 10px;
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

export default Footer
