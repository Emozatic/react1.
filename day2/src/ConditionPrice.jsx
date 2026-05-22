export default function ConditionPrice({title, price, style}){
    return(
        <>
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{price>5000 ? <h1 style={style}>5% discount</h1> : null}</p>
        </>
    )
}