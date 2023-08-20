import React from "react";
import styles from './TodoList.module.css';
import TodoItem from "./TodoItem";


function TodoList(props){

    let content;

    if(props.tasks.length === 0){
        content = <p>No tasks found</p>
    }
    else{
        content = props.tasks.map((task) => 
        <TodoItem  key={task.id} status={task.status} id={task.id} onDelete={props.onDelete} onCheck={props.onCheck} >
            {task.task}
        </TodoItem>)
    }

    return(
        <ul className={styles.list} >
            {content}
        </ul>
    );
};

export default TodoList