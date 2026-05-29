import {useState} from "react";
export default function PrintName({namep}){
    let[name, setname]= useState(false);

    let namePrint= ()=>{
        setname(!name)
    }

    return(
        <>
        <p>Your name={name ? <h1> {namep} </h1> : null}</p>
        <button onClick={namePrint}>Click</button>
        </>
    )
}