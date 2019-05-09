import React, { Component } from 'react';


class Likert extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    answerNum = () => {
      let { number } = this.state
      let newNumber = number + 1
      this.setState({number:newNumber})
    }

    render() {
      let { number } = this.props
        return(
          <div>
                <div id="likert">
                    <label id= "QNum" name="AnsNum">{number}: </label>

                    <label>A:</label>
                    <input type="radio" name= {number} value="A"></input>

                    <label>B:</label>
                    <input type="radio" name= {number} value="B"></input>

                    <label>C:</label>
                    <input type="radio" name={number} value="C"></input>

                    <label>D:</label>
                    <input type="radio" name={number} value="D"></input>

                    <label>E:</label>
                    <input type="radio" name={number} value="E"></input>
                </div>
            </div>


        )
    }
}

export default Likert
