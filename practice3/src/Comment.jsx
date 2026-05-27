import {useState} from "react";

export default function Comment(){
    let[formData, setData]= useState({
        username:"",
        comment:"",
        rating:""
    })

    let handleChange=(event)=>{
        setData((currData)=>{
            return{...currData, [event.target.name]: event.target.value}
        })
    }


    return(
        <div>
        <form action="">
        <input type="text" 
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}/>

        <input type="text" 
        placeholder="comment"
        name="comment"
        value={formData.comment}
        onChange={handleChange}/>

        <input type="text"  
        placeholder="rating"
        name="rating"
        value={formData.rating}
        onChange={handleChange}/>

        <button>Submit</button>
        </form>
        </div>
    )
}