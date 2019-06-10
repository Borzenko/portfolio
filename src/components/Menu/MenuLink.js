import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MenuLink = () => {
    return (
        <Route path={'/'}
            children={({ match }) => (
            <li className={match ? "active" : ""}>
            <Link to="/" href="./dashboard.html">
                <i className="nc-icon nc-bank"></i>
                <p>Dashboard</p>
            </Link>
            </li>
        )}
    />)
}

export default MenuLink;
