import {useState} from "react";

function buttonClick(){
    alert("Button Clicked!");
}

export default function ButtonClick({title}){
    let [count, setCount] = useState(0);
    let countClick=()=>{
        setCount(count+1);
        console.log(count);
    }
    return(
        <>
        <p>Count: {count}</p>
        <button onClick={countClick}>{title}</button>
        </>
    )
}