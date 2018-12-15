import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import DashBoard from "./components/Dashboard/dashboard";

import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import Copyright from "./components/Copyright/Copyright";
import NotFound from "./components/404/404"
import StudentManagment from "./components/StudentManagment/StudentManagment"
import history from "./History";

// React Google Analytics Initializing
//ReactGA.initialize('UA-130584601-1');


class Routers extends Component {

  componentDidMount() {
    /*
    ReactGA.pageview(window.location.pathname);
    history.listen((location => {
      ReactGA.pageview(window.location.pathname)
    }));
    */
  }
  render() {
    return (
      <Router history={history}>
        <div>

          <Navbar />
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <SideBar />
              </div>
              <div className="col-sm-9 col-lg-9">
                <Switch>
                  <Route exact path="/" component={AdminLogin} />
                  <Route exact path="/admin-dashboard" component={DashBoard} />
                  <Route exact path="/student" component={StudentManagment} />
                  <Route exact path="/admin" component={Admin} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
          </div>
          {/* <Copyright /> */}
        </div>

      </Router>
    );
  }
}
const Admin = () => {
  return ("Admin")
}

export default Routers;
