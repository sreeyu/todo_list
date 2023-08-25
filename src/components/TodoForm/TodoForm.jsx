import React, { useState } from "react";
import styles from './TodoForm.module.css';

function TodoForm(props){

    const [todo, setTodo] = useState('');

    const [status, setStatus] = useState('incomplete');

    const getTodo = (event) =>{
        setTodo(event.target.value);
    }

    const getStatus = (event) => {
        setStatus(event.target.value);
    }

    const getFormValues = (event) => {
        event.preventDefault();

        if(todo.trim().length === 0){
            return
        }
        else{
            props.onAdd(todo, status)
            setTodo('');
        }
    }

    return(
            <form className={styles.form} onSubmit={getFormValues} >
                <div>
                    <label htmlFor="task">Task:</label>
                    <input value={todo} type="text" id="task" onChange={getTodo} />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select name="status" id="status" onChange={getStatus}>
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                        
                    </select>
                </div>
                <button >Add</button>
            </form>
    );
};

export default TodoForm;