import React from 'react'
import './Footer.css'
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-box'>
                <AiOutlineCopyrightCircle color="white" size={15}/>
                <p>2021 DayZero - Financial Inclusivity for All</p>
            </div>
        </div>
    )
}

export default Footer
