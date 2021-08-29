/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Questions from "layouts/Questions.js";
import SuccessfulReferral from "layouts/Successful.js";
import Landing from "./pages/Landing.js";
import Regular from  "./pages/Regular.js";
import Recommendation from  "./pages/Recommendation.js";
import SuccessfulInsurance from "layouts/SuccessfulInsurance.js";



import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  // <HashRouter>
  //   <Switch>
  //     <Route path="/admin" component={Admin} />
  //     <Route path="/rtl" component={RTL} />
  //     <Route path="/material-dashboard-react" component={Questions} />
  //     <Route exact path = "/successfulreferral/hello" component = {SuccessfulReferral}/>
  //     {/* <Redirect from="/hello" to="/admin/dashboard" /> */}
  //     {/* <Redirect from="/material-dashboard-react" to="/" /> */}

  //   </Switch>
  // </HashRouter>,
  <HashRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route exact path = "/successfulreferral/hello" component = {SuccessfulReferral}/>
      {/* <Route exact path="/" component={Questions} /> */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/onboarding" component={Questions} />
      <Route exact path="/regular" component={Regular} />
      <Route exact path="/recommendation" component={Recommendation} />
      <Route exact path="/successfulrecommendation" component={SuccessfulInsurance} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
