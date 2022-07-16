import React from 'react';
import button_image from './images/button-icon.png'


const Hero = () => {
    return(
        <div className="hero-container">
            <div>
                <input type='text' placeholder='Top Text'/>
                <input type='text' placeholder='Bottom Text'/>
            </div>
            <button className='hero-btn'>Get a new meme image <img src={button_image} alt='img' height='12' width='12'/></button>
        </div>
    )
}

export default Hero