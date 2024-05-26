import style from "./todoItem.module.css";
export default function TodosItems({item ,todos , setTodos }){
    function handleDelete(item)
    {
    setTodos(todos.filter((todo)=> 
    todo!==item))
    }
    function handleClick(name){
      const newArray = todos.map((todo)=>todo.name === name ? {...todo, done: !todo.done} : todo);
      setTodos(newArray);
    }
    const className = item.done ? style.completed : "";
    return <div className={style.item}>
         <hr className={style.line}/>
            <div className={style.itemName}>
             <span  className={className} onClick={(e)=>handleClick(item.name)}>  {item.name}</span> 
            <button onClick={() => handleDelete(item) } className={style.delete}>X</button>
            </div>
        </div>
}