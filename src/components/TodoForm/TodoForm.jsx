import React from "react";
import styles from './TodoForm.module.css';

function TodoForm(){

    return(
        <form className={styles.form} >
            <div>
                <label htmlFor="">Task:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Status:</label>
                <select name="" id="">
                    <option value="">Complete</option>
                    <option value="">Incomplete</option>
                </select>
            </div>
            <button>Add</button>
        </form>
    );
};

export default TodoForm;