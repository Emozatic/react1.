import {useState} from "react";
import {genTicket} from "./helper";
import {sum} from "./helper";

export default function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinning= sum(ticket)===15;


    //for reset button
    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>

            <button onClick={buyTicket}>Buy Ticket</button>
            <br />
            <br />
            <h3>{isWinning && "Congratulations! You won!"}</h3>
        </div>
    )
}