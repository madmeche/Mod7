import { useState } from "react";
import EmojiContext from "./EmojiContext";
import { useContext } from "react";

function Emoji() {

  const { Face, handleChangeFace } = useContext(EmojiContext);
  const [emojiCount, setEmojiCount] = useState(0)


  const handleEmojiCount = () => {
  while (emojiCount < setEmojiCount) {
    setEmojiCount = emojiCount + 1
    return setEmojiCount
  }
  }


return (
  <div>
    <p>{Face}</p>

    <button onClick={handleChangeFace}>Get Excited</button>
    <p>{handleEmojiCount}</p>
    
    
  </div>
);
}
export default Emoji;
