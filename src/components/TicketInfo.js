import React from 'react'
import '../TicketInfo.css'

function TicketInfo() {
    return(
        <div id="ticket-info">
                <h2 className="highlight-color">Sponsorship Levels</h2>
                <div id="sponsor-1" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p><span className="highlight-color">Fly Robin Fly</span> - ¢20,000<br />30 tickets + VIP Table</p></div>
                <div id="sponsor-2" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p><span className="highlight-color">Ain't No Stopping Us Now</span> - ¢10,000<br />15 tickets + VIP Table</p></div>  
                <div id="sponsor-3" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p><span className="highlight-color">Brick House</span> - ¢5,000<br />10 tickets + VIP Table</p></div>
                <div id="sponsor-4" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p><span className="highlight-color">Ring My Bell</span> - ¢2,500<br />5 tickets</p></div>
                <div id="sponsor-5" className="sponsor-level sponsor-level-left"></div> 
                <div className="sponsor-level sponsor-level-right"><p><span className="highlight-color">Shake Your Groove Thing</span> - ¢400<br />1 ticket</p></div>
                <div></div>
        </div>
    )
}

export default TicketInfo