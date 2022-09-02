import React from 'react';
import meme_icon from './images/meme-icon.png'

function NavBar() {
    return ( 
        <div className="navbar-container">
            <div className="navbar-info">
                <img src={meme_icon} alt= "meme_icon" className='meme-icon-image' height='30px' weight='30px'/>
                <p>Meme Generator</p>
                <p>React States and API use</p>
            </div>
        </div>
     );
}

export default NavBar;