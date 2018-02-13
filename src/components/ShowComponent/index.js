import React from "react"
import styled from "styled-components"
import  { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, FIRST_QUERY} from "../../constants/index"

class ShowComponent extends React.Component {
    render() {
        console.log(this.props.children )
        return (
            <HideComponentView { ...this.props }>
                { this.props.children }
            </HideComponentView>
        )
    }
}

const HideComponentView = styled.div`
    display: none !important;

    @media (min-width: 0px) and (max-width: 40px)) {
        display: none !important;
    }

    @media (min-width: 90px) and (max-width: 130px)) {
        display: none !important;
    }

    @media (min-width: 300px) and (max-width: 480px)) {
        display: none !important;
    }
`

function makeBreakpoint(breakpoint) {
    if (Array.isArray(breakpoint)) {
        console.log("AM I RUNNING")
        const breakpoints = breakpoint.map((point) => {
            const bp = makeBreakpoints(point[0], point[1])
            console.log(point, bp)
            return bp
        })
        console.log("BREAKPOINTS:", breakpoints.toString().replace(/,/g, ""))

        return breakpoints.toString().replace(/,/g, "")
    } else {
        const breakpoints = makeBreakpoints(0, breakpoint)

        return breakpoints
    }
}

function makeBreakpoints(start, end) {
    start = String(start)
    start = start.indexOf("px") >= 0 ? start : start + "px"
    end = String(end).indexOf("px") >= 0 ? end : end + "px"
    
    return `
        @media (min-width: ${ start }) and (max-width: ${ end })) {
            display: block;
        }
    `
}

export default ShowComponent
