//  @TODO2 - Create a Clock component and add tho the app.
import { useState, useEffect } from "react";
// Renders a digital time that updates every second
function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // let clockInterval = setInterval(() => tick(), 1000)
    
    // console.log("Clock component mounted"); 
    // return() =>
    // console.log('Clock component unmounted')
    // clearInterval(clockInterval)         
  }, []); 

useEffect

  const tick = () => {
    setDate(new Date());
    console.log("tick");                                  
  };
  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
