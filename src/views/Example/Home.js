import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {

    render() {
        console.log("Check props:", this.props);
        return (
            <div>
                hello User
            </div>
        )
    }
}

export default Color(Home);