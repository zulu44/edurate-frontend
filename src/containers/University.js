import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UniversityRow extends PureComponent {
  render() {
    return (
      <tr>
        <td>{this.props.university.name}</td>
        <td>
          <Link to={`/university/${this.props.university.domain}`} className="btn btn-info">
            Detaylar
          </Link>
        </td>
      </tr>
    );
  }
}

class University extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      universities: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://192.168.1.187:8000/university`)
      .then(res => {
        const universities = res.data;
        this.setState({ universities });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const rows = this.state.universities.map(university => {
      return <UniversityRow key={university.id} university={university} />;
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
export default University;
