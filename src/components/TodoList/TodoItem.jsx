import React from "react";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import styles from './TodoItem.module.css';

function TodoItem(props){

    const deleteTodoItem = () =>{
        props.onDelete(props.id);
    }

    return(
        <li className={styles.todo} >
            <input type="checkbox" />

            <div className={styles.writing} >
                <h3>{props.children}</h3>
                <p>Status: {props.status}</p>
            </div>

            <div className={styles.buttons}>
                <button onClick={deleteTodoItem}><MdOutlineDeleteOutline size={20} /></button>
                <button ><MdOutlineModeEditOutline size={20} /></button>
            </div>
        </li>
    );
};

export default TodoItem;