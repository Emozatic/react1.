import {useState} from "react";

export default function Form(){
    let [formData, setFormData]= useState({
        fullname:"",
        username:"",
    });
    

    let changeName= (event)=>{
        setFormData((currValue)=>{
            return{...currValue, [event.target.name]: event.target.value}
        })
        console.log(event.target.value)
        console.log(event.target.name)
    }

    let preventions=(event)=>{
        event.preventDefault();
    }
    return(
        <>
        <form action="">

        <label htmlFor="fullName">Name</label> &nbsp;
        <input type="text" 
        placeholder="enter your remarks"
        value={formData.fullname}
        onChange={changeName}
        name="fullname"/>

        <br /><br />

        <label htmlFor="username">Username</label> &nbsp;
        <input type="text" 
        placeholder="enter your username"
        value={formData.username}
        onChange={changeName}
        name="username"/>

        <br /><br />

        <button>Submit</button>

        </form>
        </>
    )



}