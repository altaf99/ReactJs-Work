//Using State
import React, { Component } from 'react'

//extend the class with React component Class to make it react component
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "welcome visitor"
        }
    }

    changeMessage(){
        //to alter the state of of a class component we need to call this func
        this.setState({
            message:"Thanks For Subscribing"
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Suscribe</button>
        </div>
        )
    }
}

export default Message