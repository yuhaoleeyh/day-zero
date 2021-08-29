import React from 'react'
import "./Card.css"
import loan from '../mystatic/loan.png'
import insure from '../mystatic/insure.png'
import invest from '../mystatic/invest.png'

function Card(props) {
    const title = props.title
    let src = invest

    if (title === 'Loan') {
        src = loan
    } else if (title === 'Insure') {
        src = insure
    }

    return (
        <div className='card'>
            <div className='bluecard stack-top'>
                <img src={src} alt=""></img>
                <h2>{title}</h2>
            </div>
            <div className='whitecard'>
                <p>{props.suggestion}</p>
            </div>
        </div>
    )
}

export default Card
