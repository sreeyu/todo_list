import React, {useState} from "react";
import styles from './App.module.css'
import TodoForm from "./components/TodoForm/TodoForm";

function App() {

  const [showForm, setShowForm] = useState(false);

  const getForm = () =>{
    setShowForm(true);
  };
  
  return (
    <div className={styles.app} >
      <h1>ToDo App</h1>
      <div className={styles.action} >
        <button onClick={getForm} >Add Task</button>
        <select name="All" id="">
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      {showForm && <TodoForm onClose={setShowForm} />}
    </div>
  );
};

export default App;