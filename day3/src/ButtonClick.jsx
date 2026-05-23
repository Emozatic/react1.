function buttonClick(){
    alert("Button Clicked!");
}

export default function ButtonClick(){
    return(
        <>
        <button onClick={buttonClick}>Click Me</button>
        </>
    )
}