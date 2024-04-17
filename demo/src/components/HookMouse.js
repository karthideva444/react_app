import React from 'react'
import { useState,useEffect } from'react'

function HookMouse() {
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)

    const logMousePosition = (e) => {
        console.log("mouse event called");
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        console.log(' use Effect called ');
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            window.removeEventListener('mousemove',logMousePosition)
        }
    })

  return (
    <div>
        Hooks x - {x} y - {y}
    </div>
  )
}

export default HookMouse