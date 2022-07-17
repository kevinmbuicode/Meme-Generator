import React from 'react';
import button_image from './images/button-icon.png';
import Meme from './memeData'



const Hero = () => {

    const handleClick = () => {
        const memesArray = Meme.data.meme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url);
    }
 
    return(
        <div className="hero-container">
            <div>
                <input type='text' placeholder='Top Text'/>
                <input type='text' placeholder='Bottom Text'/>
            </div>
            <button className='hero-btn'
            onClick={handleClick}
            >Get a new meme image 
            <img src={button_image} 
            alt='img' 
            height='12' width='12'
            /></button>
        </div>
    )
}

export default Hero