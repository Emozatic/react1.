import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
 
export default function TodoList(){
    let [todo, setTodos]= useState([{task: "sample task", id: uuidv4()}]); //for todo
    let [input, setInput]= useState(""); //for input

    //for adding new todo
    let addNewTodo=()=>{
        setTodos([...todo, {task: input, id: uuidv4()}])
        setInput("");
    }

    //for input parameter
    let updateTodo=event=>{
        setInput(event.target.value);
        console.log(event.target.value);
    }



    return(
        <>
        <input type="text" 
        placeholder="Enter a todo..."
        value={input}
        onChange={updateTodo}/>
        <br />
        <button onClick={addNewTodo}>Add Todo</button>
        <br />
        <br />
        <h4>Your Todos</h4>
        <p>
            <ul>
                {todo.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </p>
        </>


    )
}
