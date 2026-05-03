// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const countRef = useRef();

  let clickCount = 0; // ← incorrect implementation

  function handleClick() {
    clickCount++;
    countRef.current.textContent = `${clickCount} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={countRef} onClick={handleClick}>
        {clickCount} Clicks
      </button>
    </div>
  );
}

/*
useRef to get a reference to the button
set text content of button to new clickCount
Not sure if this causes a re-render

My guess is that useState causes a re-render, but useRef does not
Not sure what the true difference is and why not use one over the other
*/
