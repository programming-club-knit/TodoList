import React, { useState } from "react";

function AddTodo({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                className="form-control me-2"
            />
            <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    );
}

export default AddTodo;