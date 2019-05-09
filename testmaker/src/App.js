import React, { Component }from 'react';
import './App.css';
import Likert from './likert.js'
import Scantron from './scantron.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
}

    render(){
      return (
        <div className="App">
            <Scantron />
        </div>
      );
  }
}

export default App;
