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

export default function SuccessfulReferral() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const history = useHistory();
  const classes = useStyles();
  const [friend, setFriend] = useState("");

  const handleSubmit = () => {
      let path = "/admin";
      history.push(path);

  }

  return <div className = "text-center">

     Congratulations, the referral was successful. 
     <div>You will be given points in the next cycle of achievements!</div>

     <div>
     <Button color="primary" onClick = {handleSubmit} >Return to dashboard</Button>
     </div>
      
  </div>;
}
