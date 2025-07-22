import React from 'react'

export default function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
        Clicked {count} times
    </button>
  );
}


// Notice how onClick = { handleClick } has no parentheses at the end! Do not call the event handler function: you only need to pass it down.React will call your event handler when the user clicks the button.