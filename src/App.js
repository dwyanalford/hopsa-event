import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Hero from './components/Hero'
import Navigation from './components/Navigation'

import 'w3-css/w3.css'
import './App.scss'
import './Transitions.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Hero />
      </div>
    </Router>
  );
}

export default App;