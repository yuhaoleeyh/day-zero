import React from 'react';
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import GridItem from "components/Grid/GridItem.js";
import BugReport from "@material-ui/icons/BugReport";
import { bugs, website, server, investments, loans, insurance } from "variables/general.js";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Data from "./Data";
import Ticker from "./Ticker";


export default function Investments() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div>
      <GridItem xs={12} sm={12} md={12} >
          <CustomTabs
        //   className = "blue-colour"
            headerColor="success"
            tabs={[
              {
                className: "blue-colour",
                tabName: "Investments",
                tabIcon: BugReport,
                tabContent: (
                  <Data/>
                ),
              },
              {
                tabName: "Explore",
                tabIcon: Code,
                tabContent: (
                  <Ticker/>
                ),
              },
            ]}
          />
        </GridItem>
      
      </div>;
}
