import "./App.css";
import Ticket from "./Ticket";
import Lottery from "./Lottery";
import {sum} from "./helper";
export default function(){
  let winningCondition=(ticket)=>{
    return sum(ticket)===15;
  }
  return(
    <>
  <Lottery n={3} winningSum={winningCondition}/>
  </>
  )
}
