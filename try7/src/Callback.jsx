import{useState} from "react";

function randomNum(){
    return Math.floor(Math.random()*10);
}

export default function Callback(){
    let [count, setCount]= useState(randomNum);

    let changeCount=()=>{
        setCount(randomNum)
       
    }
    return(
        <>
        <p>Count= {count}</p>
        <button onClick={changeCount}>Inc Count</button>
        </>
    )
}