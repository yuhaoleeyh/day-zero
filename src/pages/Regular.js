import React from 'react'
import "./Regular.css"
import RegularForm from '../mycomponents/RegularForm'
import Header from "../mycomponents/Header"
import Footer from "../mycomponents/Footer"


function Regular(props) {
    
    return (
        <div className="regular">
            <Header/>
            {/* <div className="regular-intro"></div> */}
            <RegularForm/>
            <Footer />
        </div>
    )
}

export default Regular
