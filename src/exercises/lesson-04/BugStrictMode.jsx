// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*
StrictMode runs the program twice essentially
I used a clearInterval() to stop setInterval() from happening when the component is no longer rendered
Not sure why it stops it from running twice though if it is still being rendered
Also not sure how it keeps running if we used [] to stop it from running every render
*/
