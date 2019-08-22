import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../Navigation.scss'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        return(
            <nav>
                    <div className="topnav" id="myTopnav">
                        <NavLink exact to="/" activeStyle={{color: '#99733B'}}>Overview</NavLink>
                        <NavLink to ="/night-to-remember" activeStyle={{color: '#99733B'}}>What?</NavLink>
                        <NavLink to ="/fundraising" activeStyle={{color: '#99733B'}}>Why?</NavLink>
                        <NavLink to ="/ticket-info" activeStyle={{color: '#99733B'}}>Ticket Info</NavLink>
                        <a href="#">Buy Tickets</a>
                        <a className="icon" onClick={this.toggleClass}>
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
            </nav>
        )
    }
}

export default Navigation
