import React, { useState, useRef } from "react";
import TodoList from "../components/TodoList.jsx";
import { v4 as uuidv4 } from "uuid";

const TaskView = () => {

    const inputRef = useRef()
    const [lista, setLista] = useState([
        { name: "trapear", id: uuidv4(), completed: false },
        { name: "barrer", id: uuidv4(), completed: false },
        { name: "ir a la tienda", id: uuidv4(), completed: false }])


    const toggleTask = (id) => {
        setLista(
            lista.map(item => {
                if (item.id === id) {
                    console.log(item.name)
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleClick = () => {
        const task = inputRef.current.value

        if (task === '') return;

        setLista((prevLista) => {
            return [...prevLista, { id: uuidv4(), name: task, completed: false }]
        })

        inputRef.current.value = null;
    }

    const handleRemove = () => {
        const task = inputRef.current.value

        if (task === '') return;

        setLista(
            lista.filter(item => item.name !== task)
        )
        inputRef.current.value = null;
    }
    return (
        <div>
            <TodoList lista={lista} toggleTask={toggleTask} />
            <input ref={inputRef} type="text" />
            <button className="btn btn-primary" name="add" onClick={handleClick}>+</button>
            <button className="btn btn-secondary" name="remove" onClick={handleRemove}>-</button>
            <p>Faltan {lista.filter(item => item.completed === false).length} tareas por terminar</p>
        </div>
    );
}

export default TaskView;