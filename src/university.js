import React, { PureComponent } from "react";
import axios from "axios";

class UniversityRow extends PureComponent {
    render() {
        return (
            <tr>
                <td>{this.props.university.id}</td>
                <td>{this.props.university.domain}</td>
                <td>{this.props.university.name}</td>
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
        //console.log("hell");
        axios
            .get(`http://192.168.1.187:8000/university`)
            .then(res => {
                const universities = res.data;
                //console.log("heaven");
                this.setState({ universities });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const rows = this.state.universities.map(university => {
            return <UniversityRow university={university} />;
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Domain</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
export default University;
