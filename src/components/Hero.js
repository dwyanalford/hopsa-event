import React from 'react'
import { Route } from "react-router-dom";

import Fundraiser from './Fundraiser'
import Event from './Event'
import TicketInfo from './TicketInfo'
import Summary from './Summary'
import Payments from './Payments'
import DiscoBall from './DiscoBall'
import Bubbles from './Bubbles'
import RecordPlayer from './RecordPlayer'

import '../Hero.scss'
import '../Transitions.scss'

function Hero () {
  return (
    <section id="hero">
      <Bubbles />          
      <div id="record-container">
        <DiscoBall />
        <RecordPlayer />
      </div>
      <div id="show-container">
        <Route exact path='/' component={Summary}></Route>
        <Route path='/fundraising' component={Fundraiser}></Route>
        <Route path='/night-to-remember' component={Event}></Route>
        <Route path='/ticket-info' component={TicketInfo}></Route>
        <Route path='/buytickets' component={Payments}></Route>
      </div>
    </section>
    )
}

export default Hero