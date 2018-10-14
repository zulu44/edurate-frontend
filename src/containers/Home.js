import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

class UserRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.instructor.name}</td>
        <td>{this.props.instructor.surname}</td>
        <td>{this.props.instructor.university.name}</td>
        <td>{this.props.instructor.instructor.gpa}</td>
        <td>{this.props.instructor.instructor.letter_note}</td>
        <td>
          <Link to={`/instructor/${this.props.instructor.id}`} className="btn btn-info">
            Oyla
          </Link>
        </td>
      </tr>
    );
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructors: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    axios.get(`http://192.168.1.187:8000/instructor`)
      .then(res => {
        const instructor = res.data;
        this.setState({ instructors: instructor });
        this.setState({ isLoading: false });
      })
  }

  renderNotes() {
    const rows = this.state.instructors.map(instructor => {
      return <UserRow key={instructor.id} instructor={instructor} />;
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>School</th>
            <th>GPA</th>
            <th>Harf Notu</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Edurate</h1>
        <p>Eğitmenlerinizi Oylayın</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}
