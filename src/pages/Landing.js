import ButtonBig from '../mycomponents/ButtonBig';
import Spacer from '../mycomponents/Spacer';
import { Link } from 'react-router-dom'
import './Landing.css';
import React from 'react';
import Image from '../mystatic/background1.jpg';   


function Landing() {
    return (
        <div className="landing" style={{ backgroundImage: `url(${Image})`}}>
            <div className="landing-box">
                <div className="landing-innerbox">
                    <h1>DayZero</h1>
                    <p>DayZero aims to promote financial inclusion by promoting long-term financial planning.<br/>Learn and grow together with us from DayZero!
                    </p>
                    <Spacer space="10"/>
                    <div>
                        <Link class="buttonx" to="/regular">Sign In</Link>
                    </div>
                    <div>
                        <ButtonBig name="Let's begin!" linkTo="onboarding"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing
