import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './board.js'
// import Square from './square.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr: []
        }
}
    addGame = () => {
        let { arr } = this.state
        arr.push(<Board />)
        this.setState({arr: arr})
    }
    removeGame = () => {
        let { arr } = this.state
        // let arrlength = arr.length() <= 1 ? "..." : arr.pop();
        arr.pop()
        this.setState({arr: arr})
    }
    render(){
        let { arr } = this.state
      return (
        <div className="App">

        <Board />
        <div>
            {arr}
        </div>
            <button id= "amount" onClick = {this.addGame}>Add a Game</button>
            <button id= "amount" onClick = {this.removeGame}>Remove a Game</button>
        </div>
      );
    }
}

export default App;
