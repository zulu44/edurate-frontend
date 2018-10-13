import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import University from "./university";

class Main extends PureComponent {
    
    render() {
        return (
            <Router>
                <div>
                    <h1>EduRate</h1>
                    <ul className="header">
                        <li>
                            <Link to="/">Anasayfa</Link>
                        </li>
                        <li>
                            <Link to="/profile/1">Profil</Link>
                        </li>
                        <li>
                            <Link to="/university">Universite</Link>
                        </li>
                    </ul>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/profile/:id" component={Profile} />
                            <Route path="/university" component={University} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
