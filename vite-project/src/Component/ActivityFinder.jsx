import { useState, useEffect } from "react";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    console.log('useEffect Activity Finder')

    let ignore = false;
    fetch("https://www.boredapi.com/api/activity?" + "participants=" + participants)
      .then((response) => response.json())
      .then((data) => {
        if (ignore === false) {
        setActivity(data.activity)}
      });

      return () => {
      ignore=true;
      console.log('cleanup effect')
    }
  }, [participants]);

  return (
    <div>
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select value={participants}
          onChange={(e) => setParticipants(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: 
        </strong>
        {activity}
      </div>
    </div>
  );
}

export default ActivityFinder;
