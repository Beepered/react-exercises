// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd(amount) {
    setCount(count + amount);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={() => handleAdd(1)}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/*
removed count++ from handleAdd()
added count + 1 setCount()
weirdly doing count++ makes you have to click twice to add to count
revised handleAdd() to use parameters
*/
