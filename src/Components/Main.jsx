import { useState } from 'react'

// Main component for meme generator
export default function Main() {
    // State to hold meme data: top text, bottom text, and image URL
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    // Handles changes to input fields and updates meme state
    function handleChange(event){
         const {value, name}  = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })) 
    }

    return (
        <main>
            {/* Form for entering meme text */}
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                {/* Button to get a new meme image (functionality not implemented yet) */}
                <button>Get a new meme image 🖼</button>
            </div>
            {/* Meme display section */}
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText }</span>
            </div>
        </main>
    )
}