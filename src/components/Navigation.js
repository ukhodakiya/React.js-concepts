import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../App.css'

class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><NavLink activeClassName="active" to="/" exact={true}>Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
                            <li><NavLink  activeClassName="active" to="/create">Create</NavLink></li>

                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Logout</a></li>

                        </ul>
                    </div>

                </div>

            </nav>
        )
    }
}

export default  Navigation;