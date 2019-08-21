import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

import 'w3-css/w3.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}

export default App;