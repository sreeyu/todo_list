import React from "react";
import styles from './TodoForm.module.css';

function TodoForm(props){

    const closeForm = () =>{
        props.onClose(false);
    };

    return(
       <div className={styles.container}>
        <button className={styles.cancel} onClick={closeForm} >x</button>
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
                <button >Add</button>
            </form>
       </div>
    );
};

export default TodoForm;