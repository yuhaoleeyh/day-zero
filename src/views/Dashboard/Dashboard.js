import React, {useState} from "react";
// react plugin for creating charts
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
import './Dashboard.css';
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


const useStyles = makeStyles(styles);
const VALUES = [ "2018-03-22", "2018-03-23" ]

const data = [
  { country: 'Stock', area: 10 },
  { country: 'Bonds', area: 35 },
  { country: 'Cash', area: 55 },
];

const marks = [
  {
    value: 0,
    label: 'Safer Assets (Bonds)',
  },
  {
    value: 100,
    label: 'Riskier Assets (Stocks)',
  },
];

function valuetext(value) {
  return `${value}`;
}



export default function Dashboard() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  return (
    <div>
      <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
          {/* <HorizontalTimeline
            index={value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES } /> */}
            <Typography id="discrete-slider-custom" className = "text-center" gutterBottom>
              <h4>
                <b>
                  Your financial life journey
                </b>
              </h4>
            </Typography>
            Safer assets (Bonds)
            <span className = "text-right">
              Riskier assets (Stocks)
            </span>
            <div>
            <Slider
              defaultValue={30}
              // aria-labelledby="discrete-slider-small-steps"
              getAriaValueText={valuetext}
              step={2}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              aria-labelledby="discrete-slider-custom"
              // disabled
              
            />
            </div>
            {/* Riskier assetsfffffffffff (Stocks) */}
        </div>
        <div className = "text-center">
          We recommend safer asset classes for you.
        </div>
        
        {/* <div className = "text-center">
          We recommend risker asset classes given your strong financial situation
        </div> */}
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          {/* "color="danger" */}
            <CardHeader className = "blue-colour">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Short-Term Historical Returns </h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 2%
                </span>{" "}
                increase from financial activity.
              </p>
              
              {/* <p className={classes.cardCategory}>Financial Performance</p> */}
              <p>Your financial classes are doing well.</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated recently
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader className = "blue-colour">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Long-Term Trajectory of financial funds</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 0.1%
                </span>{" "}
                increase in today sales.
              </p>
              <p>You are currently: ON TRACK </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated recently
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader className = "blue-colour">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Long-Term App Usage</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 6 hours
                </span>{" "}
                spent on average daily
              </p>
              <p>Time spent: APPROPRIATE </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated recently
              </div>
            </CardFooter>
            {/* <Paper>
        <Chart
          data={data}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Asset allocation"
          />
          <Animation />
        </Chart>
      </Paper>
          </Card>
        </GridItem> */}
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
              <p className={classes.cardCategory}>Personal Inflation Rate</p>
              <h3 className={classes.cardTitle}>
                1.2 <small>%</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Net gains: Returns > Inflation Rate
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
              <p className={classes.cardCategory}>Passive Income over past 2 weeks</p>
              <h3 className={classes.cardTitle}>$103</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                From your financial activity
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
              <p className={classes.cardCategory}>Financial Independence Ratio</p>
              <h3 className={classes.cardTitle}>0.49</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Net Worth divided by FI Number
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
              <p className={classes.cardCategory}>Net Worth</p>
              <h3 className={classes.cardTitle}>$197,084</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Total Assets - Total Liabilities
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Recommendations:"
            headerColor="success"
            tabs={[
              {
                tabName: "Investments",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={investments}
                  />
                ),
              },
              {
                tabName: "Loans",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0]}
                    tasks={loans}
                  />
                ),
              },
              {
                tabName: "Insurance",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={insurance}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
