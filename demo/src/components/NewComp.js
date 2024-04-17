import React from 'react'
import { useState } from 'react'

function NewComp() {
    const [name,setname] = useState("");
    const [age,setage] = useState(10);
    const [bool,setbool] = useState(false);
    const handleNameChange = (e) => {
        setname(e.target.value);
    }
    const handleAgeChangeadd = (e) => {
       setage(age+1)
    }
    const handleAgeChangesub = (e) => {
       setage(age-1)
    }
    const handleAgeChangereset = (e) => {
       setage(0)
    }
    const handleBoolChange = (e) => {
        if(age > 10){
            setbool(true)
        }
        else if(age < 10){
            setbool(false)
        
    }
    }
  return (
    <div>
        {/* <h2>           
            {name}
        </h2>
        <button onClick={handleNameChange}>press</button>
        <input type="text" onChange={(e)=>{handleNameChange(e)}} /> */}
        <br />
        <button onClick={handleAgeChangeadd}>+</button>
        <h1>{age}</h1>
        <button onClick={handleAgeChangesub}>-</button>
        <br />
        <button onClick={handleAgeChangereset}>Reset</button>
        {bool ? <h2>TRUE</h2> : <h2>FALSE</h2>}
        <button onClick={handleBoolChange}> render</button>
              
    </div>
  )
}

export default NewComp