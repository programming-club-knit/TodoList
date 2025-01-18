import React from "react";

function FilterTodos({ filter, setFilter }) {
  return (
    <div className="btn-group w-100 mb-3" role="group" aria-label="Filter todos">
      <button
        onClick={() => setFilter("all")}
        className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary text-dark bg-white"}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`btn ${filter === "completed" ? "btn-success" : "btn-outline-success text-dark bg-white"}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        className={`btn ${filter === "incomplete" ? "btn-warning" : "btn-outline-warning text-dark bg-white"}`}
      >
        Incomplete
      </button>
      <button
        onClick={() => setFilter("starred")}
        className={`btn ${filter === "starred" ? "btn-info" : "btn-outline-info text-dark bg-white"}`}
      >
        Starred
      </button>
    </div>
  );
}

export default FilterTodos;