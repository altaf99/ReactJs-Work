import React, { Component } from 'react'

class Counter extends Component {
    //we initialize the state in constructor
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        //we have to use this.setState to reflect the changes in UI else it will change internally but it will  nit reflect in UI
        this.setState({
            count: this.state.count +1
            },
            ()=> {
                console.log("Callback value", this.state.count)
            }
        )

        //the o/p of tis line is synchronous with the above code and hence its value is behind by 1
        // so to rid of that we need to add a callback function in the setSate method
        console.log(this.state.count)


    }
    
    render() {
        return (
        <div>
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        </div>
        )
    }
}

export default Counter
