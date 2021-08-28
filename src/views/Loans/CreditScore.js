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

import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
export default function Loans() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const classes = useStyles();

  return <div>
      
      <div className = "text-center">
          <h2>Your credit score is in the: </h2>
          <h1>37th percentile</h1>
      </div>
      <div className = "text-center">
          <h4>Carefully curated by our deep learning model, which studies your profile and makes tailored recommendations.</h4>
      </div>
        <GridContainer>
        <GridItem lg={1} md={1} sm={1}/>
        <GridItem xs={12} sm={6} md={2} >
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>Payment History</p>
              <h3 className={classes.cardTitle}>
                52
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Net gains
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Credit Owed</p>
              <h3 className={classes.cardTitle}>52</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="danger" stats icon>
              <p className={classes.cardCategory}>Credit History</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="info" stats icon>
              <p className={classes.cardCategory}>New Credit</p>
              <h3 className={classes.cardTitle}>38</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="info" stats icon>
              <p className={classes.cardCategory}>Credit Mix</p>
              <h3 className={classes.cardTitle}>23</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>


      <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Payment History",
                tabIcon: BugReport,
                tabContent: (
                  <PaymentHistory/>
                ),
              },
              {
                tabName: "Credit owed",
                tabIcon: Code,
                tabContent: (
                  <CreditOwed/>
                ),
              },
              {
                tabName: "Length of credit history",
                tabIcon: Cloud,
                tabContent: (
                  <LengthOfCreditHistory/>
                ),
              },
              {
                tabName: "New Credit",
                tabIcon: BugReport,
                tabContent: (
                  <NewCredit/>
                ),
              },
              {
                tabName: "Credit Mix",
                tabIcon: BugReport,
                tabContent: (
                  <CreditMix/>
                ),
              },
            ]}
          />
        </GridItem>
      
      </div>;
}
