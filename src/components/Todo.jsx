import { useState } from "react";
import TodosList from "./TodosList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo(){
   const [todos , setTodos] = useState([]);
   const completedTask = todos.filter((todo)=>todo.done).length;
   const totalTask = todos.length;
   return <>
   <Form todos={todos} setTodos={setTodos}/>
   <TodosList todos={todos} setTodos={setTodos}/>
   <Footer completedTask={completedTask} totalTask = {totalTask}/>
   </>
}