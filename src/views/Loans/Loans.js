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
import Explore from './Explore';
import CreditScore from './CreditScore';
import './explore.css';



export default function Loans() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div>
      <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
          className = "blue-colour"
            // headerColor="success"
            tabs={[
              {
                tabName: "Loan Profile",
                tabIcon: BugReport,
                tabContent: (
                  <CreditScore/>
                ),
              },
              {
                tabName: "Explore",
                tabIcon: Code,
                tabContent: (
                  <Explore/>
                ),
              },
            ]}
          />
        </GridItem>
      
      </div>;
}
