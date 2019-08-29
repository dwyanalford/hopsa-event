import React from 'react'

import '../DiscoBall.scss'

function DiscoBall() {
    return(
        <section class="stage">
            <figure class="ball-back-shadow">
                <div className="circle"></div>
            </figure>
            <figure class="ball"><span class="shadow"></span></figure>
            
        </section>
    )
}

export default DiscoBall