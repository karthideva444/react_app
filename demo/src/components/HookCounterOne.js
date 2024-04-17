import React from 'react'
import { useState,useEffect } from'react'

function HookCounterOne() {

  const [count,setcount] = useState(0)
  const [Name,setName] = useState('')

  useEffect (() => {
    console.log("updating");
    document.title = `you clicked ${count} times`
  },[count])


  return (
    <div>
      <input type="text" value={Name} onChange={(e)=> {setName(e.target.value)}} />
      <button onClick={()=>setcount(count + 1)}>click {count} times</button>
    </div>
  )
}

export default HookCounterOne