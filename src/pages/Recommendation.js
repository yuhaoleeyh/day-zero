import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Footer from '../mycomponents/Footer';
import Header from '../mycomponents/Header';
import Card from '../mycomponents/Card'
import "./Recommendation.css"
import Spacer from '../mycomponents/Spacer';

const recommendations = [
    {
        id: 6,
        loan: "Get a mortage",
        insure: "Consider getting homeowners, private mortgage, title insurance",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 7,
        loan: "Get a car loan",
        insure: "Get car insurance: TPO, Third Party, Fire and Theft, Comprehensive Coverage",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 8,
        loan: "Get a renovation loan",
        insure: "Speak to your home insurer about coverage",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 9,
        loan: "Get a wedding loan",
        insure: "Check both your health insurance, disability insurance, critical illness coverage, life, personal accident insurance",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 10,
        loan: "NIL",
        insure: "Review your health insurance, disability insurance, critical illness coverage, life, personal accident insurance",
        invest: "Consider altering your portfolio risk and amount (based on whether spouse was the main breadwinner)"
    }, {
        id: 11,
        loan: "Get a funeral loan",
        insure: "Settle life insurance claims",
        invest: "NIL"
    }, {
        id: 12,
        loan: "NIL",
        insure: "Buy health insurance, disability insurance, critical illness coverage, life, personal accident insurance",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 13,
        loan: "Get a study loan",
        insure: "NIL",
        invest: "NIL"
    }, {
        id: 14,
        loan: "NIL",
        insure: "NIL",
        invest: "Consider making your portfolio more risky"
    }, {
        id: 15,
        loan: "NIL",
        insure: "Settle disability, personal accident insurance claims",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 16,
        loan: "NIL",
        insure: "Settle health insurance claims",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 17,
        loan: "NIL",
        insure: "NIL",
        invest: "Consider making your portfolio more risky"
    }, {
        id: 18,
        loan: "NIL",
        insure: "NIL",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 19,
        loan: "NIL",
        insure: "Review your health insurance, disability insurance, critical illness coverage, life, personal accident insurance",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 20,
        loan: "NIL",
        insure: "NIL",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 21,
        loan: "NIL",
        insure: "Check their health insurance, disability insurance, critical illness coverage, life, personal accident insurance",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 22,
        loan: "NIL",
        insure: "Settle health insurance, critical illness coverage, claims",
        invest: "Consider making your portfolio less risky"
    }, {
        id: 23,
        loan: "NIL",
        insure: "NIL",
        invest: "Consider making your portfolio more risky"
    }
]

function Recommendation(props) {
    console.log(props.location.state.op)
    const issue = props.location.state.op
    let loanR = "h1"
    let insureR = "h2"
    let investR = "h3"

    // for (let recommendation in recommendations) {
    //     console.log(recommendation)
    //     if (recommendation.id === issue.id) {
    //         console.log("oi")
            
    //     }
    // }

    const allocate = (element) => {
        if (element.id === issue.id) {
            loanR = element.loan
            insureR = element.insure
            investR = element.invest
        }
    }

    recommendations.forEach(element => allocate(element))

    return (
        <div className="recommendation">
            <Header />
            <div className="recommendation-bigbox">
                <Spacer space="40" />
                <div className="recommendation-cards">
                    <Card title="Loan" suggestion={loanR}/>
                    <Card title="Insure" suggestion={insureR}/>
                    <Card title="Invest" suggestion={investR}/>
                </div>
                <Link class="button" to="/admin/dashboard">Back to Dashboard</Link>
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(Recommendation)
