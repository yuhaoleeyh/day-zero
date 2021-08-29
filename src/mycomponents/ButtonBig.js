import React from 'react'
import './ButtonBig.css'
import { Link } from "react-router-dom";

const ButtonBig = props => {
    return (
        <Link class="button-big" to={"/" + props.linkTo}>
            {props.name}
        </Link>
    )
}

export default ButtonBig
