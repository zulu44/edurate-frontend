import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouteComponent from "./route";

class Main extends PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <h1>EduRate</h1>
                    <ul className="header">
                        <li>
                            <Link to="/home">Anasayfa</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profil</Link>
                        </li>
                        <li>
                            <Link to="/university">Universite</Link>
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/:id" component={RouteComponent} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
