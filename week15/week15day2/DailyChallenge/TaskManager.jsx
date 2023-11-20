
import React, { useReducer, useRef } from "react";


function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case "FILTER_TASKS":
      return action.filter === "all"
        ? state
        : state.filter((task) => (action.filter === "completed" ? task.completed : !task.completed));
    default:
      return state;
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [taskText, setTaskText] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [editingTaskId, setEditingTaskId] = React.useState(null);
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch({ type: "ADD_TASK", text: taskText });
    setTaskText("");
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: "REMOVE_TASK", id });
  };

  const handleToggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", id });
  };

  const handleEditTask = (id) => {
    setEditingTaskId(id);
    // Set the input field value to the current task text
    setTaskText(tasks.find((task) => task.id === id).text);
    // Focus on the input field
    inputRef.current.focus();
  };

  const handleSaveEdit = () => {
    if (taskText.trim() === "") return;
    dispatch({ type: "EDIT_TASK", id: editingTaskId, text: taskText });
    setEditingTaskId(null);
    setTaskText("");
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setTaskText("");
  };

  const handleFilterTasks = (filter) => {
    setFilter(filter);
    dispatch({ type: "FILTER_TASKS", filter });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          ref={inputRef}
        />
        {editingTaskId !== null ? (
          <>
            <button onClick={handleSaveEdit}>Save Edit</button>
            <button onClick={handleCancelEdit}>Cancel Edit</button>
          </>
        ) : (
          <button onClick={handleAddTask}>Add Task</button>
        )}
      </div>
      <div>
        <button onClick={() => handleFilterTasks("all")}>Show All</button>
        <button onClick={() => handleFilterTasks("completed")}>Show Completed</button>
        <button onClick={() => handleFilterTasks("active")}>Show Active</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
              />
            ) : (
              <span
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
                onClick={() => handleToggleTask(task.id)}>
                {task.text}
              </span>
            )}
            <button onClick={() => handleEditTask(task.id)}>Edit</button>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
