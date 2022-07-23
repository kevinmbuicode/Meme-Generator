import React from 'react';
import button_image from './images/button-icon.png';
//import Meme from './memeData'



const Hero = () => {
    const [memeImage, setMemeImage] = React.useState("https://static.toiimg.com/photo/74674393.cms")   
    const [allMemes, SetAllMemes] = React.useState('')
    //Top text, bottom text in state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: ""
    })

    const getMemeImage = () => {
        const meme_url = ("https://api.imgflip.com/get_memes")
        const memesArray = meme_url.data.meme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }

    React.useEffect(()=> {
        console.log("image fetch occured")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => SetAllMemes(data))
    }, [memeImage])

    //topText bottomText event handler
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
 
    return(
        <div className="hero-container">
            <div>
                <input type='text'  
                placeholder='Top Text'
                onChange={handleChange}
                name='topText'
                value={meme.topText}
                />
                <input type='text' 
                placeholder='Bottom Text'
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"
                />
            </div>
            <button className='hero-btn'
            onClick={getMemeImage}
            >Get a new meme image 
            <img src={button_image} 
            alt='img' 
            height='12' width='12'
            /></button>
            <p>Click the button above</p>
            <div className='meme'>
                <img align='right' src={`${memeImage}`} alt="meme_image" height="250px" width="350px"/>
                <h2 className='meme-text-top'>{meme.topText}</h2>
                <h2 className='meme-text-bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Hero