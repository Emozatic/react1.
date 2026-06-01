import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo(){
    let [todo, setTodo]= useState([{task:"sample todo", id: uuidv4()}]);
    let [newTodo, setNewTodo]= useState("");

    let addNewTask=()=>{
        setTodo((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4()}]
        })
        setNewTodo("");
    }

    let updateTodo=(e)=>{
        setNewTodo(e.target.value);
    }

    //deleting Todo
    let deleteTodo=(id)=>{
        setTodo((prevTodo)=>{
            return prevTodo.filter((todo)=> todo.id !== id);
        })
    }

    //updating for all elements
    let updateAllTodo=()=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                return {...todo, task: todo.task.toUpperCase()};
            });
        });
    };

    //updating for single element

    let updateSingleTodo=(id)=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id === id){
                    return {...todo, task: todo.task.toUpperCase()};
                }
                return todo;
            });
        });
    };

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
                <li key={todo.id}>
                    {todo.task}
                <br/>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => updateSingleTodo(todo.id)}>Update</button>
                </li>
            ))}</ul>

            <button onClick={updateAllTodo}>Update all to uppercase</button>
        </div>
    )
}