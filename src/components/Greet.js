// this this the first functional component

import React from 'react'

// function Greet(){
//     return <h1>Hello Altaf</h1>
// }

//add a parameter to the function to catch the name
//i.e props u can named it anything
//use this keyword to access the value
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello, {props.name} a.k.a {props.heroname}</h1>
            {props.children}
        </div>
    ) //add () to split the JSX in multiple lines and wrap in single div tag
} 
export default Greet //using this we can import Greet with any name


//named export=> export const Greet = () => <h1>Hello Altaf</h1>
// now we need to connect this component with the main parent,
// so go to applicationCache.js

// props means => optional input or properties
// it makes the component dynamic


//Destucturing the functional Component
// const Greet = ({name, heroname}) => {
//     return(
//         <div>
//             <h1>
//                 Hello {name} aka {heroname}
//             </h1>
//         </div>
//     )
// }