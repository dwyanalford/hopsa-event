import React from 'react'
import '../TicketInfo.css'

function TicketInfo() {
    return(
        <div id="ticket-info">
                <h2 className="highlight-color">Sponsorship Levels</h2>
                <div id="sponsor-1" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p>Fly Robin Fly - <span className="highlight-color">¢20,000</span><br />30 tickets + VIP Table</p></div>
                <div id="sponsor-2" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p>Ain't No Stopping Us Now - <span className="highlight-color">¢10,000</span><br />15 tickets + VIP Table</p></div>  
                <div id="sponsor-3" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p>Brick House - <span className="highlight-color">¢5,000</span><br />10 tickets + VIP Table</p></div>
                <div id="sponsor-4" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p>Ring My Bell - <span className="highlight-color">¢2,500</span><br />5 tickets</p></div>
                <div id="sponsor-5" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p>Shake Your Groove Thing - <span className="highlight-color">¢400</span><br />1 ticket</p></div>
                <div></div>
        </div>
    )
}

export default TicketInfo