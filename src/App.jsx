import React, {useState} from "react";
import styles from './App.module.css'
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";


function App() {

  const [showForm, setShowForm] = useState(false);

  const [todoList, setTodoList] = useState([]);

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

  const deleteTodo = (todoId) =>{
    setTodoList(prevList => {
      const taskList = prevList.filter(task => task.id !== todoId);
      return taskList;
    })
  }

  const updateStatus = (todoId, updatedStatus) =>{
    setTodoList(prevList => {
      const taskList = prevList.map(task => {
        if(task.id === todoId){
          return {...task, status: updatedStatus}
        }
        return task
      })
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
      
      <TodoList tasks={todoList} onDelete={deleteTodo} onCheck={updateStatus} />
    </div>
  );
};

export default App;