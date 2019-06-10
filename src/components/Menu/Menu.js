import React from 'react';
import MenuLink from './MenuLink';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                <ul className="nav">
                    <MenuLink></MenuLink>
                </ul>
                </div>
            </div>
        )
    }
}

export default Menu;

