import React from 'react';
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


export default function Explore() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div>
      
       <div className = "text-center">
            <h1>What-if Calculator</h1>
        </div>

        <div className = "text-center">
            Calculate hypothetical credit score ratings relative to other users, trained with our state-of-the-art deep learning model.  
        </div>
      
      </div>
}
