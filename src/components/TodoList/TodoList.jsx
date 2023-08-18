import React from "react";
import styles from './TodoList.module.css';
import TodoItem from "./TodoItem";


function TodoList(props){

    return(
        <ul className={styles.list} >
            {props.tasks.map((task) => 
            <TodoItem  key={task.id} status={task.status} id={task.id} onDelete={props.onDelete} onCheck={props.onCheck} >
                {task.task}
            </TodoItem>)}
        </ul>
    );
};

export default TodoList