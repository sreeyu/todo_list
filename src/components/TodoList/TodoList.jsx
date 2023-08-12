import React from "react";
import styles from './TodoList.module.css';

function TodoList(props){

    return(
        <ul>
            {props.tasks.map((task) => <li key={task.id}>
                {task.task}
            </li>)}
        </ul>
    )
}

export default TodoList;