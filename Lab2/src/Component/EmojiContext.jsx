import { createContext, useState } from "react";
const EmojiContext = createContext() 

const DisplayEmojiContext = () => {
    
    const [face, newFace] = useState('😀');
    const [emojiCount, setEmojiCount] = useState(0);

    const handleChangeFace = () => {
        newFace(face === "😀" ? "🤩" : "🤗");
        setEmojiCount(emojiCount +1)
    }

    return (
        <div>
            <EmojiContext>
            <button onClick={handleChangeFace}>Get Excited</button>
            <p>{face}</p>
            </EmojiContext>
    
            </div>
            );
            }

export default DisplayEmojiContext;

