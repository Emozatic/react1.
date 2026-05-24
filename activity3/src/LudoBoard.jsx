import {useState} from 'react';
import './LudoBoard.css';

export default function LudoBoard(){
    const [count, setCount]=useState({blue: 0, yellow: 0, green: 0, red: 0});

    //here we using callback beacause we need to update the state based on the previous state
    // and also we need to spread method because we need to update only one color count and other color count should remain same

    const updateCountForBlue=()=>{
        setCount((prevCount)=>{
            return {...prevCount, blue:prevCount.blue + 1}
        });
    };

    const updateCountForYellow=()=>{
        setCount((prevCount)=>{
            return {...prevCount, yellow:prevCount.yellow + 1}
        });

    };

    const updateCountForGreen=()=>{
        setCount((prevCount)=>{
            return {...prevCount, green:prevCount.green + 1}
        });
    };

    const updateCountForRed=()=>{
        setCount((prevCount)=>{
            return {...prevCount, red:prevCount.red + 1}
        });
    };

    return(
        <>
        <h1>Ludo Board</h1>
        <h5>Click for Blue={count.blue} </h5>
        <button style={{ backgroundColor: 'lightblue'}} onClick={updateCountForBlue}>
            Blue
        </button>

        <h5>Click for yellow={count.yellow} </h5>
        <button style={{ backgroundColor: 'lightyellow' }} onClick={updateCountForYellow}>
            Yellow
        </button>

        <h5>Click for Green={count.green} </h5>
        <button style={{ backgroundColor: 'lightgreen' }} onClick={updateCountForGreen}>
            Green
        </button>

        <h5>Click for Red={count.red} </h5>
        <button style={{ backgroundColor: 'lightcoral' }} onClick={updateCountForRed}>
            Red
        </button>
        </>
    )
}