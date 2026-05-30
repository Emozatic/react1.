import { useState } from "react";
import "./Toggle.css"

export default function Toggle(){
    let[color, setcolor]= useState(false);

    let toggler= ()=>{
        setcolor(!color)
    }
    let istoggled={backgroundColor: color ? "black" : "white"};

    return(
        <div className="container"  style={istoggled}>
        <button onClick={toggler}>toggle</button>
        </div>
    )
}