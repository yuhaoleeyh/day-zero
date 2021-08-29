import React from 'react'

function Spacer(props) {
    const mystyle = {
        width: "100%",
        padding: props.space + "px"
    }

    return (
        <div style={mystyle}></div>
    )
}

export default Spacer
