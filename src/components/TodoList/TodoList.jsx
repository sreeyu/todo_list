import React from "react";
import styles from './TodoList.module.css';


function TodoList(props){

    return(
        <ul className={styles.list} >
            {props.tasks.map((task) => <li className={styles.todo} key={task.id}>
                {task.task}
            </li>)}
        </ul>
    );
};

export default TodoList