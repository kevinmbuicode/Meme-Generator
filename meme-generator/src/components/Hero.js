import React from 'react';
import button_image from './images/button-icon.png';
import Meme from './memeData'



const Hero = () => {
    const [memeImage, setMemeImage] = React.useState("https://static.toiimg.com/photo/74674393.cms")

    const getMemeImage = () => {
        const memesArray = Meme.data.meme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }
 
    return(
        <div className="hero-container">
            <div>
                <input type='text'  placeholder='Top Text'/>
                <input type='text' placeholder='Bottom Text'/>
            </div>
            <button className='hero-btn'
            onClick={getMemeImage}
            >Get a new meme image 
            <img src={button_image} 
            alt='img' 
            height='12' width='12'
            /></button>
            <p>Click the button above</p>
            <img align='right' src={`${memeImage}`} alt="meme_image" height="250px" width="350px"/>
        </div>
    )
}

export default Hero