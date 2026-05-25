import {useState} from 'react';

export default function LudoBoard() {
    const [count, setCount]= useState({blue:0, red:0, yellow:0, green:0});
    const [arr, setArray]= useState(["no moves"]);

    function countForBlue(){
        setCount((prevCount)=>{
            return {...prevCount, blue: prevCount.blue + 1}
        })
        setArray([...arr, "blue moves"]);
        console.log(arr)
    }
    function countForRed(){
        setCount((prevCount)=>{
            return {...prevCount, red: prevCount.red + 1}
        })
    }
    function countForYellow(){
        setCount((prevCount)=>{
            return {...prevCount, yellow: prevCount.yellow + 1}
        })
    }
    function countForGreen(){
        setCount((prevCount)=>{
            return {...prevCount, green: prevCount.green + 1}
        })
    }

    return(
        <div>
            <h1>Ludo Board</h1>
            <h2>Game Begins</h2>
            <hr />
            <p>Count = {count.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={countForBlue}>click for blue</button>

            <p>Count = {count.red}</p>
            <button style={{backgroundColor: "red"}} onClick={countForRed}>click for red</button>

            <p>Count = {count.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={countForYellow}>click for yellow</button>

            <p>Count = {count.green}</p>
            <button style={{backgroundColor: "green"}} onClick={countForGreen}>click for green</button>

            <p>array is= {arr}</p>
        </div>
    )
}