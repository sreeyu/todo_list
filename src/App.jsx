import React, {useState} from "react";
import styles from './App.module.css'
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const DUMMY_TODO = [
  {id: 't1', status:'complete', task: 'Learn JavaScript'},
  {id: 't2', status: 'incomplete', task: 'Go for a walk'},
  {id:'t3', status:'incomplete', task: 'Stretch for an hour'}
];

function App() {

  const [showForm, setShowForm] = useState(false);

  const [todoList, setTodoList] = useState(DUMMY_TODO);

  const getForm = () =>{
    setShowForm(true);
  };

  const getNewTodo = (newTodo, todoStatus) => {
    setTodoList(prevList => {
      const taskList = [...prevList];
      taskList.unshift({id: Math.random().toString(), status: todoStatus, task: newTodo});
      return taskList;
    })
  }
  
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
      
      {showForm && <TodoForm onClose={setShowForm} onAdd={getNewTodo} />}
      
      <TodoList tasks={todoList} />
    </div>
  );
};

export default App;