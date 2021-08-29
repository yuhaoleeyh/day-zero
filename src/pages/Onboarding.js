import React from 'react'
import ButtonBig from '../mycomponents/ButtonBig'
import OnboardingForm from '../mycomponents/OnboardingForm'
import "./Onboarding.css"

function Onboarding() {
    return (
        <div className='onboarding'> 
            <div className='onboarding-intro'>
                <h1>Welcome to DayZero!</h1>
                <b>We would like to get to know about you. Please fill in these 2 questionniares</b>
                <ButtonBig name="Hackathon Onboarding Bypass" linkTo="/"/>
            </div>
            <OnboardingForm></OnboardingForm>
        </div>
    )
}

export default Onboarding
