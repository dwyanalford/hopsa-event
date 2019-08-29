import React, { Component } from 'react'
import '../AudioControls.scss'
import themeSong from '../audio/night-to-remember.mp3'

class AudioControls extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.playAudio = this.playAudio.bind(this)
        this.pauseAudio = this.pauseAudio.bind(this)
    }

    playAudio() {
        document.getElementById('audio-controller').play()
        document.getElementById('record-vinyl').classList.add('record-spins')
    }

    pauseAudio() {
        document.getElementById('audio-controller').pause()
        document.getElementById('record-vinyl').classList.remove('record-spins')
    }

    // Note below that the audio-controller is hidden in the CSS. 
    // The created player-controls below is used to control the audio-controller.

    render() {
        return (
            <section>
                <audio id="audio-controller" controls loop>
                    <source src={themeSong} type="audio/mpeg"/>
                    Your browser does not support the audio tag.
                </audio>
                <div id="player-controls">
                    <div>
                        <i class="fas fa-music fa-lg adjust"></i>
                        <i id="play-icon" className="fas fa-play fa-lg" onClick={this.playAudio}></i>
                        <i id="pause-icon" className="fas fa-pause fa-lg" onClick={this.pauseAudio}></i>
                    </div>
                </div>
            </section>
        );
    } 
}

export default AudioControls
  