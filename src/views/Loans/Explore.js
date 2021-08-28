import React, {useState} from 'react';
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import GridItem from "components/Grid/GridItem.js";
import BugReport from "@material-ui/icons/BugReport";
import { bugs, website, server, investments, loans, insurance } from "variables/general.js";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import CreditMix from "./CreditMix";
import CreditOwed from "./CreditOwed";
import LengthOfCreditHistory from "./LengthOfCreditHistory";
import NewCredit from "./NewCredit";
import PaymentHistory from './PaymentHistory';
import Slider from '@material-ui/core/Slider';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import './explore.css';



export default function Explore() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const [paymentHistory, setPaymentHistory] = useState(0);
  const [creditOwed, setCreditOwed] = useState(0);
  const [creditHistoryLength, setCreditHistoryLength] = useState(0);
  const [creditScore, setCreditScore] = useState(null);

  const changePaymentHistory = (val) => {
    setPaymentHistory(val);
    setCreditScore(paymentHistory + creditOwed + creditHistoryLength)
  }

  const changeCreditOwed = (val) => {
    setCreditOwed(val);
    setCreditScore(paymentHistory + creditOwed + creditHistoryLength)
    }

    const changeCreditHistoryLength = (val) => {
        setCreditHistoryLength(val);
        setCreditScore(paymentHistory + creditOwed + creditHistoryLength)
    }


  return <div>
      
       <div className = "text-center">
            <h1>What-if Calculator</h1>
        </div>

        <div className = "text-center">
            Calculate hypothetical credit score ratings relative to other users, trained with our state-of-the-art deep learning model.  
        </div>

        <div className = "text-center">
            <h2>
                {creditScore === null ? "-" : creditScore} 
            </h2>
        </div>

        <Typography id="discrete-slider-always"  gutterBottom>
        How many late payments do you have? (Payment History)
        </Typography>
        <div className = "padding-top">
        <Slider 
        className = "padding-top"
        defaultValue={0}
        onChange={ (e, val) => changePaymentHistory(val) }  
        onDragStop={ (e) => changePaymentHistory(val)}
        // getAriaValueText={"Number of late payments"}
        valueLabelDisplay="on"
        />
        </div>
        
        <Typography id="discrete-slider-always" gutterBottom>
        How much credit do you owe? (Credit Owed)
        </Typography>
        <div className = "padding-top">
        <Slider
        defaultValue={0}
        onChange={ (e, val) => changeCreditOwed(val) }  
        onDragStop={ (e) => changeCreditOwed(val)}
        // getAriaValueText={"How much credit you owe"}
        valueLabelDisplay="on"
        className = "padding-top"
        />
        </div>

        <Typography id="discrete-slider-always" gutterBottom>
        How long have you held your credit accounts? (Length of credit history)
        </Typography>
        <div className = "padding-top">
        <Slider
        className = "padding-top"
                defaultValue={0}
                onChange={ (e, val) => changeCreditHistoryLength(val) }  
                onDragStop={ (e) => changeCreditHistoryLength(val)}
                // getAriaValueText={"How long have you held your credit accounts"}
                valueLabelDisplay="on"
                />

</div>
{/* 
        <div>{paymentHistory}</div>
        <div>{creditOwed}</div>
        <div>{creditHistoryLength}</div> */}
      
      </div>
}
