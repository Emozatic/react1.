import Ticket from "./Ticket";
import TicketNum from "./TicketNum";
import { useState } from "react";
import { genTicket, sum } from "./helper";

export default function Lottery({n=3, winningSum}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning= winningSum(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "Congratulations! You won!"}</h3>
        </div>
    )
}
