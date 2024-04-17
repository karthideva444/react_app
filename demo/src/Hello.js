
import React from 'react'

const Hello = props => {

    return (
        <div>
            <h1>Hello {props.name} and hero name is {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Hello
