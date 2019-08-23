import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../Navigation.scss'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.toggleClass = this.toggleClass.bind(this)
        this.closeMobileMenu = this.closeMobileMenu.bind(this)
    }

    toggleClass() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    closeMobileMenu() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav responsive") {
            x.classList.remove('responsive');
        } else {
            x.className = "topnav responsive";
        }
    }

    render() {
        return(
            <nav>
                    <div className="topnav" id="myTopnav">
                        <NavLink exact to="/" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu}>Overview</NavLink>
                        <NavLink to ="/night-to-remember" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu}>What?</NavLink>
                        <NavLink to ="/fundraising" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu}>Why?</NavLink>
                        <NavLink to ="/ticket-info" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu}>Ticket Info</NavLink>
                        <NavLink to ="/buytickets" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu}>Buy Tickets</NavLink>
                        <a className="icon" onClick={this.toggleClass}>
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
            </nav>
        )
    }
}

export default Navigation
