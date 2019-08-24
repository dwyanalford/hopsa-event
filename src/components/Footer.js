import React, { Component } from 'react'
import '../Footer.scss'
import themeSong from '../audio/night-to-remember.mp3'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.playAudio = this.playAudio.bind(this)
        this.pauseAudio = this.pauseAudio.bind(this)
    }

    playAudio() {
        document.getElementById('audio-controller').play()
        document.getElementById('record-vinyl').classList.add('App-logo')
    }

    pauseAudio() {
        document.getElementById('audio-controller').pause()
        document.getElementById('record-vinyl').classList.remove('App-logo')
    }

    render() {
        return (
            <footer className="background-color">
                <audio id="audio-controller" controls loop>
                    <source src={themeSong} type="audio/mpeg"/>
                    Your browser does not support the audio tag.
                </audio>
                <div id="player-controls">
                    <div>
                        <i id="play-icon" className="fas fa-play fa-lg adjust" onClick={this.playAudio}></i>
                        <i id="pause-icon" className="fas fa-pause fa-lg adjust" onClick={this.pauseAudio}></i>
                    </div>
                </div>
                <div id="contacts">
                    <div>
                        <p>Contacts / More Info WHATSAPP<br />Cynthia Boateng +233 24 328 6151(GH)<br />Afi Tetteh +1 214 616 7595(US)</p>
                    </div>
                </div>
                <div id="social-media-icons" style={{display: 'none'}}>
                    <div>
                        <i className="fab fa-facebook fa-2x adjust"></i>
                        <i className="fab fa-whatsapp fa-2x adjust"></i>
                        <i className="fab fa-instagram fa-2x adjust"></i>
                    </div>
                </div>
                <div id="contact-button">
                    <div>
                        <a href="mailto:aflowery@me.com?cc=c.langlah@tgcrestaurant.com&subject=night%20to%20remember%20website%20inquiry" className="w3-button w3-round-large w3-large w3-amber">EMAIL US</a>
                    </div>
                </div>
            </footer>
        );
    } 
}

export default Footer
  