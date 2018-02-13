import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"

class ShowComponent extends React.Component {
    render() {
        console.log(this.props.children )
        return (
            <ShowComponentView { ...this.props }>
                { this.props.children }
            </ShowComponentView>
        )
    }
}

let DISPLAY = "block"

const ShowComponentView = styled.div`
    display: none;
    ${({ flex }) => DISPLAY = flex ? "flex" : "block"};
    ${({ breakpoint }) => makeBreakpoint(breakpoint)}
`

function makeBreakpoint(breakpoint) {
    if (Array.isArray(breakpoint)) {
        const breakpoints = breakpoint.map((point) => makeBreakpoints(point[0], point[1]))

        return breakpoints.toString().replace(/,/g, "")
    } else {
        const breakpoints = makeBreakpoints(breakpoint)
        console.log("POINTS", breakpoints)

        return breakpoints
    }
}

function makeBreakpoints(start, end) {
    start = String(start)
    start = start.indexOf("px") >= 0 ? start : start + "px"
    
    if (!end) {
        return `
            @media (min-width: ${ start }) {
                display: ${ DISPLAY };
            }
        `
    } else {
        end = String(end).indexOf("px") >= 0 ? end : end + "px"
    
        return `
            @media (min-width: ${ start }) and (max-width: ${ end }) {
                display: ${ DISPLAY };
            }
        `
    }
}

export default ShowComponent
