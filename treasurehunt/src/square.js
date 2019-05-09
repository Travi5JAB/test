import React, { Component }from 'react';

class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxicon: "?",
            boxcolor: "#4d2600",

            }
        }
        iconChange = () => {
            let { boxicon , boxcolor} = this.state
            let { value, index, lifecount } = this.props
            let valuecheck = value === 1 ? "url('green.png')":"url('tree.png')"
            let valuecheck2 = value === 1 ? "X": value
            this.setState({boxicon:valuecheck2})
            this.setState({boxcolor:valuecheck})
            lifecount(value)
        }
    render(){
        let { boxicon, boxcolor } = this.state
        let { value, index, lifecount } = this.props
      return (
        <div className="App">
            <button id = "square"  style = {{backgroundImage: boxcolor}} onClick = {this.iconChange}>
                <h2>{boxicon}</h2>

            </button>

        </div>
      );
    }
}
//
export default Square;
