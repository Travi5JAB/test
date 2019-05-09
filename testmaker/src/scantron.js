import React, { Component } from 'react';
import Likert from './likert.js'

class Scantron extends Component{
    constructor(props){
        super(props)
        this.state = {
            arr: [],
            number:1
        }
    }
    answerNum = () => {
      let { number } = this.state
      let newNumber = number + 1
      this.setState({number:newNumber})
    }
    add = () => {
        let { arr, number } = this.state
        arr.push(
            <Likert/>)
        let newNumber = number + 1
        this.setState({number:newNumber})
        this.setState({arr: arr})
    }
    remove = () => {
        let { arr, number } = this.state
        let newNumber = number -1
        // let arrlength = arr.length() <= 1 ? "..." : arr.pop();
        arr.pop()
        this.setState({number:newNumber})
        this.setState({arr: arr})
    }
    render(){
        let { arr, number } = this.state
        return(
            <div>
            <div className="App">
                <div>{arr}</div>
                <button id= "amount" onClick = {this.add}>Add a Question</button>
                <button id= "amount" onClick = {this.remove}>Remove a Question</button>
            </div>
            </div>
        )
    }
}

export default Scantron
