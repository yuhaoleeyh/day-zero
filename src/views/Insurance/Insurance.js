import React from "react";
// @material-ui/core components
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
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server, investments, loans, insurance } from "variables/general.js";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.js";

import "./insurance.css";

// const styles = {
//   cardCategoryWhite: {
//     "&,& a,& a:hover,& a:focus": {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0",
//     },
//     "& a,& a:hover,& a:focus": {
//       color: "#FFFFFF",
//     },
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: "#777",
//       fontSize: "65%",
//       fontWeight: "400",
//       lineHeight: "1",
//     },
//   },
//   tableUpgradeWrapper: {
//     display: "block",
//     width: "100%",
//     overflowX: "auto",
//     WebkitOverflowScrolling: "touch",
//     MsOverflowStyle: "-ms-autohiding-scrollbar",
//   },
//   table: {
//     width: "100%",
//     maxWidth: "100%",
//     marginBottom: "1rem",
//     backgroundColor: "transparent",
//     borderCollapse: "collapse",
//     display: "table",
//     borderSpacing: "2px",
//     borderColor: "grey",
//     "& thdead tr th": {
//       fontSize: "1.063rem",
//       padding: "12px 8px",
//       verticalAlign: "middle",
//       fontWeight: "300",
//       borderTopWidth: "0",
//       borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
//       textAlign: "inherit",
//     },
//     "& tbody tr td": {
//       padding: "12px 8px",
//       verticalAlign: "middle",
//       borderTop: "1px solid rgba(0, 0, 0, 0.06)",
//     },
//     "& td, & th": {
//       display: "table-cell",
//     },
//   },
//   center: {
//     textAlign: "center",
//   },
// };
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import HorizontalTimeline from "react-horizontal-timeline";
import { ArrowDownward } from "@material-ui/icons";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(styles);

export default function Insurance() {
  const classes = useStyles();

  const history = useHistory();


const handleSubmit = (e) => {
    e.preventDefault();
      let path = '/successfulrecommendation'
      history.push(path)

}
  return (
    <div>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={10}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              Insurance
            </h4>
            <p className={classes.cardCategoryWhite}>
              A side-by-side comparison of the kinds of insurance, and recommendations to buy.
            </p>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Life Insurance</p>
              
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <ol className={[classes.cardTitle, "text-left"].join(' ')}>Protection against unexpected death </ol>
              <ol className={[classes.cardTitle, "text-left"].join(' ')}>Protection against total permenant disability</ol>
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Health Insurance</p>
              
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                <ol className={[classes.cardTitle, "text-left"].join(' ')}>Coverage for better wards across hospitals </ol>
              <ol className={[classes.cardTitle, "text-left"].join(' ')}>Availability of riders</ol>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Critical illness</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                <ol className={[classes.cardTitle, "text-left"].join(' ')}>Lump sum payout for serious illness </ol>
                <ol className={[classes.cardTitle, "text-left"].join(' ')}>Depends on stage of illness</ol>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Personal Accident</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                <ol className={[classes.cardTitle, "text-left"].join(' ')}>Payout for Personal Accidents </ol>
              <ol className={[classes.cardTitle, "text-left"].join(' ')}>Useful for non-health related problems</ol>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <div className = "text-center">
      <Button color="primary" onClick = {handleSubmit} >Recommend me a suitable plan!</Button>
      </div>
    
    </div>
  );
}
