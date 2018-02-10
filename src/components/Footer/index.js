import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from "../../constants/index"


class Footer extends React.Component {
    render() {
        return (
            <FooterView>
                {/* <Wrapper>
                    <Image>
                    </Image>
                    <Links>
                    </Links>
                    <SocialMedia>
                    </SocialMedia>
                </Wrapper> */}
            </FooterView>
        )
    }
}

const FooterView = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${ SECONDARY_COLOR }
`

export default Footer
