import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo(){
    let [todo, setTodo]= useState([{task:"sample todo", id: uuidv4()}]);
    let [newTodo, setNewTodo]= useState("");

    let addNewTask=()=>{
        setTodo([...todo,  {task: newTodo, id: uuidv4()}]);
    }

    let updateTodo=(e)=>{
        setNewTodo(e.target.value);
    }
    
    return(
        <div>
            <input type="text" 
            value={newTodo}
            onChange={updateTodo}/>

            <br /><br />

            <button onClick={addNewTask}>Add todo</button>

            <br /><br />

            <h3>
                Task Todo
            </h3>

            <ul>{todo.map((todo)=>(
                <li key={todo.id}>{todo.task}</li>
            ))}</ul>
        </div>
    )
}