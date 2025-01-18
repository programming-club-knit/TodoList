import React from "react";
import outlinedStar from "./icons/star-svgrepo-com.svg"
import filledStar from "./icons/star-svgrepo-com (1).svg"




function TodoItem({ todo, toggleTodo, deleteTodo,toggleStar }) {
    return (
        <li>
            {/* added button component for toggling starred component */}
             <button onClick={() => toggleStar(todo.id)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <img
                    src={todo.starred ? filledStar : outlinedStar}
                    alt={todo.starred ? "Starred" : "Unstarred"}
                    width="24"
                    height="24"
                />
            </button>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            
        </li>
    );
}

export default TodoItem;