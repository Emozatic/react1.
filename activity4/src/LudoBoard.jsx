import {useState} from "react";

export default function LudoBoard(){
      const [count, setCount]= useState({blue:0, red:0, green:0, yellow:0});

        let changeCountForBlue=()=>{
            setCount((prevMove)=>{
                return{...prevMove, blue: prevMove.blue+1}
            })
        }

        let changeCountForRed=()=>{
            setCount((prevMove)=>{
                return{...prevMove, red: prevMove.red+1}
            })
        }

        let changeCountForGreen=()=>{
            setCount((prevMove)=>{
                return{...prevMove, green: prevMove.green+1}
            })
        }

        let changeCountForYellow=()=>{
            setCount((prevMove)=>{
                return{...prevMove, yellow: prevMove.yellow+1}
            })
        }
    return(
      
        
        <>
        <h1>Ludo Game</h1>
        <h2>Game Begins</h2>
        <br />
        <p>Click count = {count.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={changeCountForBlue}>Click for blue</button>
        <p>Click count ={count.red}</p>
        <button style={{backgroundColor:"red"}} onClick={changeCountForRed}>Click for red</button>
        <p>Click count = {count.green}</p>
        <button style={{backgroundColor:"green"}} onClick={changeCountForGreen}>Click for green</button>
        <p>Click count = {count.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={changeCountForYellow}>Click for yellow</button>
        </>
    )
}