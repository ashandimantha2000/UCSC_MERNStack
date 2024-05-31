import React from 'react'
import { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')
    //Example for empty dependency array
    useEffect(()=>{
        console.log("Render with empty dependency array");
    });

    //Example for dependency array with initial render
    useEffect(()=>{
        console.log("Render with initial render dependency array");
    }, []);

    //Example for dependency array with count only
    useEffect(()=>{
        console.log("Render with count dependency array");
    }, [count]);


  return (
    <div>
        <h1>UseEffect</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <p>{name}</p>
    </div>
  )
}

export default UseEffect