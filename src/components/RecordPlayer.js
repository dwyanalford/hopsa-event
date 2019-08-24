import React from 'react'
import '../RecordPlayer.scss'

import recordPlayer from '../images/record-player.png'
import recordVinyl from '../images/record-vinyl.png'
import recordPlayhead from '../images/record-playhead.png'

function RecordPlayer() {
    return(
        <div>
            <img id="record-player" src={recordPlayer} alt="record player" />
            <img id="record-vinyl"  src={recordVinyl} alt="record vinyl" />
            <img id="record-playhead" src={recordPlayhead} alt="record playhead" />
        </div>
    )
}

export default RecordPlayer