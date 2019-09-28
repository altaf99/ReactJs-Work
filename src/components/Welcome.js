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

//props are immutable
//this.props.name="tony" =>error