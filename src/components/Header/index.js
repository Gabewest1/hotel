import React from "react"
import styled from "styled-components"

class Header extends React.Component {
    render() {
        return (
            <HeaderView>

            </HeaderView>
        )
    }
}

const HeaderView = styled.div`
    height: 100vh;
    background: url(/assets/images/home_hero.jpg) no-repeat;
    background-size: cover;
    background-position: 80% center;
`
export default Header
