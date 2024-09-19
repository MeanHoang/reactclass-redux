import React from "react";
import "../Nav/Nav.scss"
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        ///e.preventDeafault()
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                    <NavLink to="/todo" activeClassName="active">ToDo App</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/listUser" activeClassName="active">List User</NavLink>

                </div>
            </div>
        )
    }
}

export default Nav;
