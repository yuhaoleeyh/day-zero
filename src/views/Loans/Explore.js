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


export default function Explore() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const [paymentHistory, setPaymentHistory] = useState(0);
  const [creditOwed, setCreditOwed] = useState(0);
  const [creditHistoryLength, setCreditHistoryLength] = useState(0);
  return <div>
      
       <div className = "text-center">
            <h1>What-if Calculator</h1>
        </div>

        <div className = "text-center">
            Calculate hypothetical credit score ratings relative to other users, trained with our state-of-the-art deep learning model.  
        </div>


        <Slider onChange={ (e, val) => setPaymentHistory(val) }  
        onDragStop={ (e) => setPaymentHistory(val)}/>

        <div>{paymentHistory}</div>
        <div>{creditOwed}</div>
        <div>{creditHistoryLength}</div>
      
      </div>
}
