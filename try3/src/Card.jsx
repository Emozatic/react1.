import "./Card.css";

import Title from "./Title";
import Description  from "./Description";
import Image from "./Image";

export default function Card({title, price, arr, img}){
    return(
    <>
    <div className="container">
        <Image img={img}/>
     <Title title= {title} arr={arr}/>
    <Description price={price}/> 
    </div>
   </>    
    )
}