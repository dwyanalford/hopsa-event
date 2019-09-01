import React from 'react'

import '../Contact.scss'

function Contact() {
    return(
        <div id="contacts">
            <div>
                <h2>Hosted by <span className="highlight-color">HOPSA 79 DIVAS</span></h2><br />
                <p>Contacts / More Info WHATSAPP <i className="fab fa-whatsapp fa-lg"></i><br /><br />Cynthia Boateng +233 24 328 6151(GH)<br />Afi Tetteh +1 214 616 7595(US)</p>
            </div><br />
            <div id="social-media-icons">
                <p>Follow us on Social Media for latest updates</p>
                <div>
                    <a href="https://www.facebook.com/HOPSA-79-DIVAS"><i className="fab fa-facebook fa-2x adjust"></i></a>
                    <a href="https://www.instagram.com/hopsa79/"><i className="fab fa-instagram fa-2x adjust"></i></a>
                </div>
            </div><br/><br/>
            <div>
                <a href="mailto:aflowery@me.com?cc=c.langlah@tgcrestaurant.com&subject=night%20to%20remember%20website%20inquiry" className="w3-button w3-round-large w3-large w3-amber">EMAIL US</a>
            </div><br/>
            <p style={{fontSize: '18px'}}>&copy;&nbsp;2019. HOPSA79DIVAS. All Rights Reserved. Site design by Dwyan.</p>
        </div>

    )
}

export default Contact