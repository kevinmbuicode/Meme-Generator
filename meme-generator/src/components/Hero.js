import React from 'react';
import button_image from './images/button-icon.png';
import Meme from './memeData'


const Hero = () => {
    const [meme, setMeme] = React.useState("https://static.toiimg.com/photo/74674393.cms")
    // const [allMemes, setAllMemes] = React.useState('https://static.toiimg.com/photo/74674393.cms')
    // const [meme, setMeme] = React.useState({
    //     topText: "",
    //     bottomText: "",
    //     // randomImage: "https://static.toiimg.com/photo/74674393.cms"
    // })

    //useEffect with async await
    // React.useEffect(()=> {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     //call async function to run the function
    //     getMemes()
    //     //no clean up, we don't really need it
    // }, [])

    //useEffect with fetch
    // React.useEffect(()=> {
    //     console.log("Fetch occured")
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
    // }, [])

    function getMemeImage() {
        const MemesArray = Meme.data.meme
        const randomNumber = Math.floor(Math.random() * MemesArray.length)
        const url = MemesArray[randomNumber].url
        setMeme(url)
    }

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
                <img align='right' src={`${meme}`} alt="meme_image" height="250px" width="350px"/>
                <h2 className='meme-text-top'>{meme.topText}</h2>
                <h2 className='meme-text-bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Hero;