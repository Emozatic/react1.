import {useState} from "react";

function buttonClick(){
    alert("Button Clicked!");
}

// export default function ButtonClick({title}){
//     let [count, setCount] = useState(0);
//     let countClick=()=>{
//         setCount(count+1);
//         console.log(count);
//     }
//     return(
//         <>
//         <p>Count: {count}</p>
//         <button onClick={countClick}>{title}</button>
//         </>
//     )
// }

//storing names
 
export default function ButtonClick(){
    const names= ["Alice", "Bob", "Charlie", "David", "Eve"];
    const [index, setName]= useState(0);
    return(
        <>
        <h1>{names[index]}</h1>
        <button onClick={()=>{
            setName(index+1)
        }}>Show Next</button>
        </>
    )
}