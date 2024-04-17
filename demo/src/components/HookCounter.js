import React from 'react'
import { useState } from 'react'

function HookCounter() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");

    return(
            <div>
            <form >
               <br />
                <input type="text" onChange={(e) => setfirstname(e.target.value)} />
                <input type="text" onChange={(e) => setlastname(e.target.value)} />
                <h1>firstname : {firstname}
                <br />lastname :{lastname}</h1>
                
            </form>            
            </div>
        )
}


export default HookCounter