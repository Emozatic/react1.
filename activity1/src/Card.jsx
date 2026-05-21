import CardName from "./CardName";
import CardImage from "./CardImage";
import CardBio from "./CardBio";
import CardBtn from "./CardBtn";
import "./Card.css";

export default function Card({ name, bio }) {
    return (
        <div className="card">
            <CardName name={name} />
            <CardImage />
            <CardBio bio={bio} />
        <CardBtn />
        </div>
    )
}