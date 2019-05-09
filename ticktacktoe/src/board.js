import React, { Component }from 'react';
import Box from './box.js'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            blank:[1,2,3,4,5,6,7,8,9],
            xoarr:["X","O","X","O","X","O","X","O","X"],
            plays:[],
            arrind: 0
            }
        }
        fun = () => {
            let {arrind, xoarr, plays}=this.state
            let playercycle = xoarr[arrind]
            let indchange = arrind + 1
            this.setState({arrind:indchange})
            this.setState({plays:playercycle})
        }





    render(){
        let { blank, xoarr, arrind,plays} = this.state
        let boxes = blank.map((value, index)=>{

          return (
                    <Box
                    key = {index}
                    />
              );
          })
        return(
            <div className = "box-cont">
                {boxes}
                <button onClick= {this.fun}>touch me</button>
                <div>{plays}</div>
                <div> {arrind}</div>
            </div>
        )
    }
}
export default Board;
