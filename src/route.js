import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import University from "./university";

class RouteComponent extends PureComponent {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/university" component={University} />
                </Switch>
            </div>
        );
    }
}

export default RouteComponent;
