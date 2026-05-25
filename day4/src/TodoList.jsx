import {useState} from 'react';

export default function TodoList() {
    let[todos, setTodos]= useState(["sample tasks"]);
    let[newTodo,setNewTodo]= useState("");

    let addNewTask= ()=>{
        setTodos([...todos, setTodo]);
        setNewTodo("");
    }   

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return(
        <>
        <input type="text" placeholder="add a todo" 
        value={newTodo} 
        onChange={updateTodoValue}></input>

        <br />

        <button onClick={addNewTask}>Add</button>

        <br /><br />
        <h4>Your Tasks</h4>
        <ul>{todo.map((todo)=>{
            <li>{todo}</li>
})
        }    
            </ul>
            </>
    )
}