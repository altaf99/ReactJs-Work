//creating Class component
import React, { Component } from 'react'

//extend the class with React component Class to make it react component
class Welcome extends Component{
    render() {
        return <h1>Welcome, {this.props.name} a.k.a {this.props.heroname}</h1>
    }
}

export default Welcome

//class has to render()
//use this keyword in class component
//to access the props value

//props:
//props are immutable
//this.props.name="tony" =>error
//Function paraeter

//state:
//managed within the component
//variables declared in the func body
//can change the state
//to aceess the state,
//it useStateHook-function compoenent
//and this.state - class component


//Destucturing the Class Component
// class Welcome extends Component{
//     render() {
//         const {name,heroname} = this.props
//         // const {state1, state2} = this.state
//         return <h1>Welcome, {name} a.k.a {heroname}</h1>
//     }
// }

// export default Welcome