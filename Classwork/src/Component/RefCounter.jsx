import { useRef } from "react";

export default function RefCounter() {
  let countRef = useRef(0);
  let count = 0;

  function handleClick() {
    countRef.current = countRef.current + 1;
    count = count + 1;
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }

  return (
    <div>
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
        {/* try rendering {count} or {countRef.current} here */}
      </button>
    </div>
  );
}
