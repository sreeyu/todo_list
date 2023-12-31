import React, { useState } from "react";
import styles from './TodoList.module.css';
import TodoItem from "./TodoItem";


function TodoList(props){

    const [selectOption, setSelectOption] = useState('All');

    const getOption = (event) => {
        setSelectOption(event.target.value)
    }

    const filterArray = () => {
        if(selectOption === 'All'){
            return props.tasks;
        }
        else{
            return props.tasks.filter(task => task.status === selectOption)
        }
    }

    let content;

    if(props.tasks.length === 0){
        content = <p>No tasks found</p>
    }
    else{
        const filteredArray = filterArray()
        content = filteredArray.map(task => 
        <TodoItem  key={task.id} status={task.status} id={task.id} onDelete={props.onDelete} onCheck={props.onCheck} >
            {task.task}
        </TodoItem>)
    }

    return(
        <ul className={styles.list} >
             <select name="All" id="" onChange={getOption}>
                <option value="All">All</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select>
            {content}
        </ul>
    );
};

export default TodoList