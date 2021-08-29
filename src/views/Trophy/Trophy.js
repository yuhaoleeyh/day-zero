import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import { makeStyles } from "@material-ui/core/styles";
// core components
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);


export default function Questions() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const classes = useStyles();
  return (<div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Achievements</h4>
            <p className={classes.cardCategoryWhite}>
              Those who are on the path to financial independence and/or have referred others to the journey!
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              tableHead={["Name", "Country", "City", "Points"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "106,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "83,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "76,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "58,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "53,542"],
                ["Mason Porter", "Chile", "Gloucester", "48,615"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  </div>);
}








