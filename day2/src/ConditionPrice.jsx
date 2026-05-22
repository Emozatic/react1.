export default function ConditionPrice({title, price }){
    return(
        <>
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{price>5000 ? "5% discount" : null}</p>
        </>
    )
}