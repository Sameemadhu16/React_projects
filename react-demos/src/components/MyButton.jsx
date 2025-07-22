import React, { useState } from 'react'

export default function MyButton() {

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
        console.log(count + 1);
    }

  return (
    <button onClick={handleClick}>
        Clicked {count} times
      
    </button>
  );
}


// Notice how onClick = { handleClick } has no parentheses at the end! Do not call the event handler function: you only need to pass it down.React will call your event handler when the user clicks the button.