import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import './questions.css';
import { useHistory } from "react-router-dom";

const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
    },
  };
  
  const useStyles = makeStyles(styles);

export default function Referral() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const history = useHistory();
  const classes = useStyles();
  const [friend, setFriend] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      let path = '/successfulreferral/hello'
      history.push(path)

  }



  return <div className = "text-center">

      <GridContainer>
        <GridItem xs = {1} sm = {1} md = {1} />
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Refer your friend</h4>
              <p className={classes.cardCategoryWhite}>Include others in this long-term financial journey</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Name of friend"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Age"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer className = "padding-top">
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel className = "padding-top" style={{ color: "#808080" }}>What financial background does he/she have?</InputLabel>
                  <CustomInput
                    labelText="He/She has..."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick = {handleSubmit} >Recommend DayZero!</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      
  </div>;
}
