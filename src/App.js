import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all, completed, incomplete

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      starred: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

// added the toggle star function
  const toggleStar = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, starred: !todo.starred } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    // added a new if condition for starred features
    if(filter === "starred") return todo.starred;
    return true; // all
  });

  return (
    <div className="app-container text-light">
      <div className="container p-4">
        <div
          className="card shadow-lg p-4 text-black"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: "35vw",
            height: "75vh",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <h1 className="text-center mb-4">Todo List</h1>
          <div className="mb-3">
            <AddTodo addTodo={addTodo} />
          </div>
          <div className="mb-3">
            <FilterTodos filter={filter} setFilter={setFilter} />
          </div>
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            toggleStar={toggleStar}
          />
        </div>
      </div>
    </div>
  );
  
}

export default App;
