import React from "react";

const TodoItem = ({ item, toggleTask }) => {
    const { name, id } = item

    const handleToggle = () => {
        toggleTask(id)
    }
    return (
        <li>
            <label htmlFor={name} className="m-1" >
                <input name={name} type="checkbox" className="m-1" onClick={handleToggle} />
                {name}
            </label>
        </li>
    )
}


export default TodoItem