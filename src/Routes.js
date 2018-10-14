import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Profile from "./containers/Profile";
import AppliedRoute from "./components/AppliedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import University from "./containers/University";
import UniversityDetail from "./containers/UniversityDetail";
import Instructor from "./containers/Instructor";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/profile" exact component={Profile} props={childProps} />
    <AppliedRoute path="/university" exact component={University} props={childProps} />
    <AppliedRoute path="/university/:domain" exact component={UniversityDetail} props={childProps} />
    <AppliedRoute path="/instructor/:id" exact component={Instructor} props={childProps}/>
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
