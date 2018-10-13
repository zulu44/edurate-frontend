import React, { PureComponent } from "react";

class Profile extends PureComponent {
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <p>
                    Mauris sem velit, vehicula eget sodales vitae, rhoncus eget
                    sapien:
                </p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default Profile;
