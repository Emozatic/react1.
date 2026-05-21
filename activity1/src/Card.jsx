import CardName from "./CardName";
import CardImage from "./CardImage";
import CardBio from "./CardBio";
import CardBtn from "./CardBtn";
import CardHobby from "./CardHobby";
import "./Card.css";

export default function Card({ name, bio, hobby1 }) {
    return (
        <div className="card">
            <CardName name={name} />
            <CardImage />
            <CardBio bio={bio} />
            <CardHobby hobby1={hobby1} />
        <CardBtn />
        </div>
    )
}