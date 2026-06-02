import {useState} from "react";
import {createRandom,sum} from "./helper";

export default function LudoGame(){
    let [count, setCount]= useState(createRandom(3));
    let isWinning =sum(count)===20;

    let buyTicket=()=>{
        setCount(createRandom(3));
    }
    return(
        <>
        <p>Current values: {count.join(", ")}</p>
        <button onClick={buyTicket}>Buy Ticket</button>
        {isWinning && <p>Congratulations! You won!</p>}
</>
    )
}









