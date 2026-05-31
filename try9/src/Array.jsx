import {useState} from "react";
 

export default function LudoBoard(){
    let[color, setColor]= useState({blue:0, red:0, yellow:0, green:0});
    let [arr, setArr]= useState(["no moves"])
    let colorBlue=()=>{
        setColor((color)=>{
            return{...color, blue:color.blue+1}
        })
        arr.push("blue Moves");
        setArr(arr);

    }

    let colorRed=()=>{
        setColor((color)=>{
            return {...color, red: color.red+1};
        })
    }

    let colorYellow=()=>{
        setColor((color)=>{
            return {...color, yellow: color.yellow+1};
        })
    }

    let colorGreen=()=>{
        setColor((color)=>{
            return {...color, green:color.green+1};
        })
    }
    return(
        <>
        <p>{arr}</p>
        <h1>Ludo Game</h1>
        <br /> <br />
        <p>Click for blue= {color.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={colorBlue}>Inc Blue</button>
        <br /> <br />

        <p>Click for red= {color.red}</p>
        <button style={{backgroundColor:"red"}} onClick={colorRed}>Inc red</button>
        <br /> <br />

        <p>Click for yellow= {color.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={colorYellow}>Inc yellow</button>
        <br /> <br />

        <p>Click for green= {color.green}</p>
        <button style={{backgroundColor:"green"}} onClick={colorGreen}>Inc green</button>
        <br /> <br />
        </>
    )
}