import React from 'react'
import { Route } from "react-router-dom";

import Fundraiser from './Fundraiser'
import Event from './Event'
import TicketInfo from './TicketInfo'
import Summary from './Summary'
import Payments from './Payments'
// import DiscoBall from './DiscoBall'
import Bubbles from './Bubbles'
import RecordPlayer from './RecordPlayer'
import Contact from './Contact'
import AudioControls from './AudioControls'
import BlackWomanSilhouette from '../images/black-woman-silhouette.png'

import '../Hero.scss'
import '../Transitions.scss'

function Hero () {
  return (
    <section id="hero">
      <Bubbles />          
      <div id="record-container">
        <div id="hero-backdrop"><img src={BlackWomanSilhouette} alt="soul sista silhouette" /></div>
        <div className="mobile-footer-background"></div>
        <div className="mobile-header-text"><h1 className="highlight-color">HOPSA79DIVAS</h1></div>
        <RecordPlayer />
        <AudioControls />
      </div>
      <div id="show-container">
        <Route exact path='/' component={Summary}></Route>
        <Route path='/fundraising' component={Fundraiser}></Route>
        <Route path='/night-to-remember' component={Event}></Route>
        <Route path='/ticket-info' component={TicketInfo}></Route>
        <Route path='/buytickets' component={Payments}></Route>
        <Route path='/contact' component={Contact}></Route>
      </div>
    </section>
    )
}

export default Hero