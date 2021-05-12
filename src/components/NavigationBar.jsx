import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavigationBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expend-lg navbar=-Light bg-Light nb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Login功能</Link>
                    <span>
                    <Link className="navbar-brand" to="/signup">注册</Link>
                    </span>
                </div>
                </nav>
        )   
    }
}
