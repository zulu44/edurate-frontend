import React, { PureComponent } from "react";

class UserRow extends PureComponent {
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.phone}</td>
                <td>{this.props.user.email}</td>
            </tr>
        );
    }
}

class Home extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        contacts: [
          { name: "Tom Jackson", phone: "555-444-333", email: "tom@gmail.com" },
          { name: "Mike James", phone: "555-777-888", email: "mikejames@gmail.com" },
          {
              name: "Janet Larson",
              phone: "555-222-111",
              email: "janetlarson@gmail.com"
          },
          {
              name: "Clark Thompson",
              phone: "555-444-333",
              email: "clark123@gmail.com"
          },
          { name: "Emma Page", phone: "555-444-333", email: "emma1page@gmail.com" }
      ]
      }
    }

    render() {
        const rows = this.state.contacts.map(user => {
            return <UserRow user={user} />;
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
export default Home;
