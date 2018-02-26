import React from "react"
import styled from "styled-components"

export default class RoomsSection extends React.Component {
    render() {
        return (
        <ContactSectionView { ...this.props }>
            <Description>
                <Address1>3801 Stark Hollow Road</Address1>
                <Address2>Denver, CO</Address2>
                
                <Phone>
                (555) 555-9900
                </Phone>
            </Description>
        </ContactSectionView>
        )
    }
}
const Title = styled.h1`

`
const Description = styled.p``
const Image = styled.img``

const Address1 = styled.span`
    display: block;
    font-family: 'Montserrat', sans-serif;  
`
const Address2 = styled.span`
    display: block;
    font-size: 12px;
`

const Phone = styled.span`
    display: block;
    font-weight: 500;
    padding-top: 1em;
    color: #333;
`

const ImageContainer = styled.div`
`

const ContactSectionView = styled.section`
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    margin-top: 7em;
    padding: 0em 2em;
    line-height: 25px;
    font-family: Helvetica;
    font-size: 15px;
    letter-spacing: 0.12rem;
    width: 300px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    border-bottom: #b9b9b9 1px solid;
    text-transform: uppercase;
    border-top: #b9b9b9 1px solid;

    @media (max-width: 450px) { 
        width: 260px;
    }
`