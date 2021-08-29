import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

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

export default function News() {
  // eslint-disable-next-line react/react-in-jsx-scope
  const history = useHistory();
  const classes = useStyles();
  const [friend, setFriend] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      let path = '/successfulreferral/hello'
      history.push(path)

  }

  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    axios.get("http://api.day-zero.xyz/news")
    .then(response => {
        setNewsData(response.data)
        console.log(response.data[0])
        const data = JSON.parse(response.data)
        console.log(data[0]);
    });
}, []); // See Note 2



  return <div className = "text-center">

      <GridContainer>
        <GridItem xs = {1} sm = {1} md = {1} />
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>NEWS - We believe in empowering our users</h4>
              <p className={classes.cardCategoryWhite}>Recommendations for today.</p>
            </CardHeader>
              {newsData === null ? null : 
              <div>
                   <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <div>
                  {newsData[0][0]}
                  </div>
                  <div className = "padding-top">
                  {newsData[0][1]}
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <div>
                  {newsData[1][0]}
                  </div>
                  <div className = "padding-top">
                  {newsData[1][1]}
                  </div>
                  
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <div>
                  {newsData[2][0]}
                  </div>
                  <div className = "padding-top">
                  {newsData[2][1]}
                  </div>
                  
                </GridItem>
              </GridContainer>
            </CardBody>
              </div>  }
           
          </Card>
        </GridItem>
      </GridContainer>

      
  </div>;
}
