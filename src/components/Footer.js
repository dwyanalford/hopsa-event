import React, { Component } from 'react'
import '../Footer.css'
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
            <footer className="w3-amber">
                <audio id="audio-controller" controls loop ref={this.playAudio}>
                    <source src={themeSong} type="audio/mpeg"/>
                    Your browser does not support the audio tag.
                </audio>
                <div id="player-controls">
                <i id="play-icon" class="fas fa-play fa-lg adjust" onClick={this.playAudio}></i>
                <i id="pause-icon" class="fas fa-pause fa-lg adjust" onClick={this.pauseAudio}></i>
                </div>
                <div id="contacts">
                    <p className="w3-text-black">Contacts / More Info WHATSAPP<br />Cynthia Boateng +233 24 328 6151(GH)<br />Afi Tetteh +1 214 616 7595(US)</p>
                </div>
                <div id="contact-button">
                <button className="w3-button w3-round-large w3-xlarge w3-black w3-hover-amber">CONTACT US</button>
                </div>
                <div id="social-media-icons">
                <i className="fab fa-facebook fa-2x adjust"></i>
                <i className="fab fa-whatsapp fa-2x adjust"></i>
                <i class="fab fa-instagram fa-2x adjust"></i>
                </div>
            </footer>
        );
    } 
}

export default Footer
  