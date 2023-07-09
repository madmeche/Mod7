//  @TODO3 - Completely migrate the Emoji component into a separate one with its own state (leave App 
// component to be stateless).
//Display another emoji, which is the same as that in the Emoji component and reflects when ‘Change Mood’ 
//is clicked, next to the time within the Clock component. (Hint: useContext).
import React from 'react';
import { useState } from 'react';

function Emoji() {
  const [face, newFace] = useState('😀');

  const handleChangeFace = () => {
      newFace(face === "😀" ? "🤩" : "🤗");
  }
  return (
      <div>
          
          <button onClick={handleChangeFace}>Get Excited</button>
          <p>{face}</p>
          </div>
          );
          }
          export default Emoji;


