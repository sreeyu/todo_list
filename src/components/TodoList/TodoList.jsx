import React from "react";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import styles from './TodoList.module.css';


function TodoList(props){

    return(
        <ul className={styles.list} >
            {props.tasks.map((task) => 
            <li className={styles.todo} key={task.id}>
                
                <input type="checkbox" />

                <div className={styles.writing} >
                    <h3>{task.task}</h3>
                    <p>Status: {task.status}</p>
                </div>

                <div className={styles.buttons}>
                    <button id={task.id}><MdOutlineDeleteOutline size={20} /></button>
                    <button id={task.id}><MdOutlineModeEditOutline size={20} /></button>
                </div>
            </li>)}
        </ul>
    );
};

export default TodoList