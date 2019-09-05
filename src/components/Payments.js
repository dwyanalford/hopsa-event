import React from 'react'
import '../Payments.scss'

function Payments() {
    return(
        <div id="payments" name="transition">
            <div id="payment-container">
                <h2 className="highlight-color">Buy Tickets Online</h2>
                <div id="credit-card-icons">
                    <i className="fab fa-cc-paypal fa-2x"></i>
                    <i className="fab fa-cc-visa fa-2x"></i>
                    <i className="fab fa-cc-mastercard fa-2x"></i>
                    <i className="fab fa-cc-discover fa-2x"></i>
                    <i className="fab fa-cc-amex fa-2x"></i>
                </div>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >

                    <input type="hidden" name="cmd" value="_s-xclick"/>

                    <table className="form-options">
                    <tbody>
                    <tr><td><input type="hidden" name="on0" value="Tickets"/>** Early Bird only available with 1 ticket purchase on or before September 7, 2019</td></tr><tr><td><br /><select name="os0">

                                    <option value="Early Bird">Early Bird $70.00 USD</option>

                                    <option value="Regular Ticket">Regular Ticket $80.00 USD</option>

                                    <option value="VIP A">VIP A $100.00 USD</option>

                                    <option value="VIP B">VIP B $133.33 USD</option>

                    </select> </td></tr>
                    </tbody>
                    </table><br />
                    

                    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>

                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>

                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>

                    </form>
                    <br /><br />
                    <div id="local-tickets">
                    <h2 className="highlight-color">Buy Tickets Locally in Ghana</h2>
                    <p>Ticket Outlets (Ghana):<br/><span className="highlight-color">Gold Coast Restaurant</span> +233 24 328 6151<br/><span className="highlight-color">Tatters Boutique</span> +233 30 222 9422</p>
                    <p>Ghana<br/><span className="highlight-color">Momo - MTN MOBILE:</span> +233 55 523 1961<br/><span className="highlight-color">Express Pay</span></p>
                    <p>US/UK<br/><span className="highlight-color">Paypal:</span><br/>Aflowery@sbcglobal.net<br/><span className="highlight-color">Zelle:</span> +1 214 616 7595<br/><span className="highlight-color">Venmo:</span> AFSTER</p>
                </div>
            </div>
                
        </div>
    )
}

export default Payments