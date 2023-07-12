//  @TODO2 - Create a Clock component and add tho the app.

import React from 'react';


const Clock = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerId = setInterval(setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date]); // leaving [] blank helps with the number of re-renders, but it doesn't show the time changing until you refresh.

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;

