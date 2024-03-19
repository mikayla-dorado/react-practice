//? Create a simple counter with buttons that increment and decrement
//! The state I will be manipulating will be the 'count'
//! Create buttons to increment&decrement
//! Use onClicks to give function to the buttons
//! Display the count
//! Display the buttons

import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count * 2)}>Multiply</button>
            <button onClick={() => setCount(count / 2)}>Divide</button>
        </div>
    )
}