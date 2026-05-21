import CardName from "./CardName";
import CardImage from "./CardImage";
import CardBio from "./CardBio";
import CardBtn from "./CardBtn";
import "./Card.css";

export default function Card(){
    return(
        <div className="card">
        <CardName />
        <CardImage />
        <CardBio />
        <CardBtn />
        </div>
    )
}