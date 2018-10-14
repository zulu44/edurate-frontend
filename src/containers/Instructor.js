import React, { PureComponent } from "react";
import { Rating, TextInput, Button } from "belle";
import axios from "axios";

class Instructor extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            rating: undefined
        };
        this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    componentDidMount() {
        this.getUser()
    }

    getUser() {
        axios
            .get(`http://192.168.1.187:8000/user/id/${this.props.match.params.id}`)
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

    handleRatingChange(e) {
        this.setState({ rating: e.value }, () => {
            axios
            .post(`http://192.168.1.187:8000/rate`, {
                username: this.props.username,
                instructor_id: this.state.user.id,
                rating: this.state.rating - 3
            })
            .then(res => {
                const user = res.data;
                console.log(user)
                this.setState({ user }, () => {
                    this.props.history.push('/')
                });
            })
            .catch(err => {
                console.log(err);
            });
        })
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
                    <tbody style={{borderSpacing: 50}}>
                        <tr>
                            <td style={{width: 100}}><b>Adı: </b> </td>
                            <td>{this.state.user.name}</td>
                        </tr>
                        <tr>
                            <td><b>Soyadı: </b> </td>
                            <td>{this.state.user.surname}</td>
                        </tr>
                        <tr>
                            <td><b>Hakkında: </b> </td>
                            <td>{this.state.user.bio}</td>
                        </tr>
                        <tr>
                            <td><b>Puan: </b> </td>
                            <td>{this.state.user.instructor.gpa}</td>
                        </tr>
                        <tr>
                            <td><b>Harf Notu: </b> </td>
                            <td>{this.state.user.instructor.letter_note}</td>
                        </tr>
                        <tr>
                            <td><b>Universite: </b> </td>
                            <td>{this.state.user.university.name}</td>
                        </tr>
                        <tr>
                            <td><b>Verilen Puan : </b> </td>
                            <td><Rating value={this.state.rating} onUpdate={this.handleRatingChange}></Rating></td>
                        </tr>
                        <tr>
                            <td><b>Yorum: </b> </td>
                            <td>
                                <TextInput placeholder="Yorumunuzu buraya yazabilir misiniz?" allowNewLine />
                                <Button style={{marginTop: 25}} primary>Gönder</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Instructor;
