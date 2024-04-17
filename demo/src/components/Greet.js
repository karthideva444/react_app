import React from 'react'

// function Greet(props) {
//   return (
//     <div>
//         <h1>Hello {this.props.heroName}</h1>
//     </div>
//   )
// }
const Greet = (props) =>{
    return (
        <div>
            <h1>Hello {props.welcomemsg} </h1>
        </div>
    )
}

export default Greet