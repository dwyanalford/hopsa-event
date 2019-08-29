import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../Navigation.scss'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.toggleClass = this.toggleClass.bind(this)
        this.closeMobileMenu = this.closeMobileMenu.bind(this)
        this.menuTransition = this.menuTransition.bind(this)
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

    menuTransition() {
        const a = document.getElementById('show-container')
        a.classList.add('fade-in')

        return new Promise(resolve => {
            setTimeout(function() {
              resolve("fast");
              a.classList.remove('fade-in')
            }, 1300);
          });
    }

    render() {
        return(
            <nav>
                    <div className="topnav" id="myTopnav">
                        <NavLink exact to="/" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu}onClick={this.menuTransition}>Overview</NavLink>
                        <NavLink to ="/night-to-remember" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu} onClick={this.menuTransition}>What?</NavLink>
                        <NavLink to ="/fundraising" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu} onClick={this.menuTransition}>Why?</NavLink>
                        <NavLink to ="/ticket-info" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu} onClick={this.menuTransition}>Ticket Info</NavLink>
                        <NavLink to ="/buytickets" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu} onClick={this.menuTransition}>Buy Tickets</NavLink>
                        <NavLink to ="/contact" activeStyle={{color: '#F9C43A'}} onClick={this.closeMobileMenu} onClick={this.menuTransition}>Contact</NavLink>
                        <button className="icon" onClick={this.toggleClass}>
                            <i className="fas fa-bars fa-lg"></i>
                        </button>
                    </div>
            </nav>
        )
    }
}

export default Navigation
