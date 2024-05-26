import React from 'react';
import TodosItems from "./TodosItems";
import style from "./todosList.module.css";

export default function TodosList({ todos , setTodos}) {
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return (
        <div className={style.list}>
            {sortedTodos.map((item) => (
                <TodosItems key={item.name} item={item} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
}
