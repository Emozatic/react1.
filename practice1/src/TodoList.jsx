import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
 
export default function TodoList(){
    let [todo, setTodos]= useState([{task: "sample task", id: uuidv4(), isMarkedAsTrue:false}]); //for todo
    let [input, setInput]= useState(""); //for input

    //for adding new todo
    let addNewTodo=()=>{
        setTodos([...todo, {task: input, id: uuidv4(), isMarkedAsTrue:false}])
        setInput("");
    }

    //for input parameter
    let updateTodo=event=>{
        setInput(event.target.value);
        console.log(event.target.value);
    }

    //function for deleting a todo
    let deleteTodo= (id)=>{
        setTodos(todo.filter((todo) => todo.id !== id));
    }

    //function for setting all todos to upper case
    let setUpperCase=()=>{
        setTodos(todo.map((todo)=>{
            return {...todo, task: todo.task.toUpperCase()};
        }))
    }


    //function for setting all todos to lower case
    let setLowerCase=()=>{
        setTodos(todo.map((todo)=>{
            return {...todo, task: todo.task.toLowerCase()};
        }))
    }
    //function for update only one

    function updateOneTodo(id){
        setTodos(todo.map((todo)=>{
            if(todo.id==id){
                return {...todo, task: todo.task.toUpperCase()};
            }
            else{
            return todo;
        }
        }
        
    ))
    }

    function markedAsRead(id){
        setTodos(todo.map((todo)=>{
            if(todo.id==id){
                return {...todo, isMarkedAsTrue: true};
            }
            else{
                return todo;
            }
        }))

    }

    return(
        <div>
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
                    <li key={todo.id}><span style={todo.isMarkedAsTrue ? { textDecoration: 'line-through' } : {}}>{todo.task}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => updateOneTodo(todo.id)}>Update</button>
                    <button onClick={() => markedAsRead(todo.id)}>Marked as Complete</button>
                    </li>
                ))}
            </ul>
        </p>
        <button onClick={setUpperCase}>Set Upper Case</button>
        <button onClick={setLowerCase}>Set Lower Case</button>
        </div>



    )
}



