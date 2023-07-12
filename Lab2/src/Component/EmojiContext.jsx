import { React, createContext, useState } from "react";
import Emoji from "./Emoji";


 const EmojiContext = createContext();

 export const Provider = ({children}) => {

    const [Face, setFace] = useState("😀");


    const handleChangeFace = () => {
        setFace(Face === "😀" ? "🤩" : "🤗");

        // while (emojiCount < setEmojiCount) {
        //     setEmojiCount = emojiCount + 1
        //     return setEmojiCount}

        
    }
    // const handleEmojiCount = () => {
    //     setEmojiCount(emojiCount +1)
    //     return setEmojiCount
    // }

    return (
        <div>
            <EmojiContext.Provider value = {{Face, handleChangeFace}}>
            {children}
            </EmojiContext.Provider>
    
            </div>
            );
           
};

export default EmojiContext;



 






