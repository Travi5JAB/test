import React, { Component }from 'react';
import Square from './square.js'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            // spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            // spaces: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            blank: [],
            lives: 5
            }
        }
        indexupdate = () =>{
            let { spaces, ind, blank} =this.state
            let random = Math.floor(Math.random()*9)
                while(blank.length<9){
                    if(blank.length === random){
                        blank.push(1)
                    }else{
                        blank.push(0)
                    }
            }
            this.setState({blank: blank})
            console.log(blank);
    }
        winner = () => {
            // let {}
        }
        lifecount =  (value) => {
            let {lives} = this.state
            if(value === 1){
                alert("You Found the Treasure:  You are Winner")
                document.location.reload();
            }else{
                lives -= 1
            if (lives < 0){
                lives = 0
            }if (lives === 0){
                alert("Your Shovel Broke:  You Lose")
                document.location.reload();
            }
            }this.setState({lives:lives})
        }



    render(){
        let { spaces, ind, blank, lives} = this.state
        let box = blank.map((value, index)=>{

          return (
                    <Square
                    key = {index}
                    value = {value}
                    index = {index}
                    lifecount= {this.lifecount}
                    />

              );
          })
        return(
            <div class = "boarddiv">
                <h1>Welcome to Treasure Hunt</h1>
                <h3>Pick A Square</h3>
                <div id= "mainboard">{box}</div>
                <button id="startgame"onClick= {this.indexupdate}>Start Game</button>
                <p id="livesleft">Lives Left:{lives}</p>
                <p></p>
            </div>
        )
    }
}
export default Board;
