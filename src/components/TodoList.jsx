import React from "react";
import TodoItem from './TodoItem'

const TodoList = ({ lista, toggleTask }) =>
    <div>
        <ul>
            {lista.map((item) => {
                return <TodoItem key={item.id} item={item} toggleTask={toggleTask} />
            })}
        </ul>
    </div>

export default TodoList