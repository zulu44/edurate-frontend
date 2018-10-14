import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      username: ""
    };
  }

  async componentDidMount() {
    this.userHasAuthenticated(true);
    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = (authenticated, username) => {
    this.setState({ isAuthenticated: authenticated, username });
  };

  handleLogout = async event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  };

  render() {
    const childProps = {
      username: this.state.username,
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">EduRate</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <LinkContainer to="/profile">
                <NavItem>
                  Profil
                </NavItem>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Brand>
                <LinkContainer to="/university">
                <NavItem>
                  Üniversiteler
                </NavItem>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                {this.state.isAuthenticated ? (
                  <Fragment>
                    <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  </Fragment>
                ) : (
                  <Fragment>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes childProps={childProps} />
        </div>
      )
    );
  }
}

export default withRouter(App);
