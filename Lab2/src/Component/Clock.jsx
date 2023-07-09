//  @TODO2 - Create a Clock component and add tho the app.

import React, { useContext } from 'react';
import EmojiContext from './EmojiContext'
import DisplayEmojiContext from './EmojiContext';

const Clock = () => {
  const [date, setDate] = React.useState(new Date());
  const emoji = useContext(EmojiContext)
  // const count = '🤗'
  // const counter = count + 1

  React.useEffect(() => {
    const timerId = setInterval(setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  // const RefCounter = () => {
  //   let countRef = useRef(0);
  //   let count = '🤗'
  //   countRef.current = countRef + 1
  //   count = count +1
  // }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <DisplayEmojiContext/>
      {/* <p>{emoji}</p> */}
    </div>
  );
}

export default Clock;

