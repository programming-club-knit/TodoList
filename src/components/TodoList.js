import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, toggleStar }) {
    return (
        <div className="todo-list-container">
        <ul ul className="list-group">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    toggleStar={toggleStar}
                />
            ))}
        </ul>
        </div>
    );
}

export default TodoList;