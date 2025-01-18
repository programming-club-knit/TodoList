import React from "react";
import outlinedStar from "./icons/star-svgrepo-com.svg"
import filledStar from "./icons/star-svgrepo-com (1).svg"


function TodoItem({ todo, toggleTodo, deleteTodo,toggleStar }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {/* added button component for toggling starred component */}
             <button onClick={() => toggleStar(todo.id)} className="btn btn-link p-0">
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
                className="form-check-input me-2"
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none", "overflow": "hidden",
        "whiteSpace": "nowrap"}}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger btn-sm">Delete</button>
            
        </li>
    );
}

export default TodoItem;
