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
import * as https from 'https';





export default function Explore() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const [paymentHistory, setPaymentHistory] = useState(80);
  const [creditOwed, setCreditOwed] = useState(80);
  const [creditHistoryLength, setCreditHistoryLength] = useState(0);
  const [creditScore, setCreditScore] = useState(null);

  const changePaymentHistory = (val) => {
    setPaymentHistory(100 - val);
    let dict = {
        "credit_history_length": creditHistoryLength,
        "credit_owed": creditOwed,
        "payment_history": paymentHistory
    }

    const agent = new https.Agent({  
        rejectUnauthorized: false
       });

    axios.post("http://api.day-zero.xyz/credit", dict, { httpsAgent: agent })
    .then(response => {
        setCreditScore(response.data.credit_percentile)
        const timer = setTimeout(() => {
            console.log('axios request')
         }, 500)
         return () => {
             clearTimeout(timer)
         }; 
    });
  }

  const changeCreditOwed = (val) => {
    setCreditOwed(100 - val);
    let dict = {
        "credit_history_length": creditHistoryLength,
        "credit_owed": creditOwed,
        "payment_history": paymentHistory
    }

    const agent = new https.Agent({  
        rejectUnauthorized: false
       });

    axios.post("http://api.day-zero.xyz/credit", dict, { httpsAgent: agent })
    .then(response => {
        setCreditScore(response.data.credit_percentile)
        const timer = setTimeout(() => {
            console.log('axios request')
         }, 500)
         return () => {
             clearTimeout(timer)
            }; 
    });
    }

    const changeCreditHistoryLength = (val) => {
        setCreditHistoryLength(val);
        let dict = {
            "credit_history_length": creditHistoryLength,
            "credit_owed": creditOwed,
            "payment_history": paymentHistory
        }

        const agent = new https.Agent({  
            rejectUnauthorized: false
           });
    
        axios.post("http://api.day-zero.xyz/credit", dict, { httpsAgent: agent })
        .then(response => {
            setCreditScore(response.data.credit_percentile)
            const timer = setTimeout(() => {
                console.log('axios request')
             }, 500)
             return () => {
                 clearTimeout(timer)
             }; 
        });
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
                {creditScore === null ? "-" : creditScore} {creditScore === null ? null : "th percentile"}
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
        onDragStop={ (e) => changeCreditOwed(e)}
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
                onDragStop={ (e) => changeCreditHistoryLength(e)}
                // getAriaValueText={"How long have you held your credit accounts"}
                valueLabelDisplay="on"
                />

</div>
      
      </div>
}
