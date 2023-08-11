import React from "react";
import styles from './App.module.css'
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className={styles.app} >
      <h1>ToDo App</h1>
      <div className={styles.action} >
        <button>Add Task</button>
        <select name="All" id="">
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      <TodoForm />
    </div>
  );
};

export default App;