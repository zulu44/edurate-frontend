import React, { PureComponent } from "react";
import axios from "axios";

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.getUser = this.getUser.bind(this);
    }

    componentDidMount() {
        this.getUser()
    }

    componentWillReceiveProps() {
        this.getUser()
    }

    getUser() {
        console.log(this.props.match.params.id)
        axios
            .get(`http://192.168.1.187:8000/user/${this.props.match.params.id}`)
            .then(res => {
                const user = res.data;
                console.log(user)
                console.log("heaven");
                this.setState({ user });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (!this.state.user.university) {
            return null;
        }
        if (this.state.user.is_instructor && !this.state.user.instructor) {
            return null;
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Adı:</th>
                            <td>{this.state.user.name}</td>
                        </tr>
                        <tr>
                            <th>Soyadı:</th>
                            <td>{this.state.user.surname}</td>
                        </tr>
                        <tr>
                            <th>Hakkında:</th>
                            <td>{this.state.user.bio}</td>
                        </tr>
                        <tr>
                            <th>Username:</th>
                            <td>{this.state.user.username}</td>
                        </tr>
                        <tr>
                            <th>Username:</th>
                            <td>{this.state.user.university.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Profile;
