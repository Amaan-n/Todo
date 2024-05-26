import { useState } from "react";
import style from "./form.module.css";
export default function Form({todos,setTodos}){
    const [todo , setTodo] = useState({name:"" , done : false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos , todo]);
        setTodo({name:"" , done : false});
       }
    return  <form className={style.todoForm}>
    <div className={style.flexItem}> 
    <input className={style.modernInput} onChange={(e)=>setTodo({ name : e.target.value  , done: false})} value={todo.name} type="text" placeholder="Enter the TODO item"></input>
    <button className={style.modernButton} onClick={(e)=>handleSubmit(e)} type="submit"> Add </button>
    </div>   
   </form>
}