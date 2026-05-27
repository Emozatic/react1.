import {useState, useEffect} from 'react';

export default function UseEffect() {
    const [countx, setCountx]= useState(0);
    const [county, setCounty]= useState(0);

    let countIncx=()=>{
        setCountx((currCount)=>currCount+1)
    }

    let countIncy=()=>{
        setCounty((currCount)=>currCount+1)
    }

    useEffect(function(){
        console.log("useEffect")
    },[countx])

    return(
        <>
        <h4>Count: {countx}</h4>
        <button onClick={countIncx}>inc count</button>

        <h4>Count: {county}</h4>
        <button onClick={countIncy}>inc count</button>
        </>
    )
}
