import { useSelector } from "react-redux/es/hooks/useSelector"
import { addTodo } from "../redux/todos"
import { useDispatch } from "react-redux"
import { useState } from "react"


const Task = () => {
    const [description, setDescription] = useState("");
    // const [todotime, setTodotime] = useState("");
    const {putTodo} = useSelector((state) => state.todos)
    const dispatch = useDispatch();


    const handleTodo = (e) => {
        e.preventDefault();
        setDescription(e.target.desc.value) 
        resetForm(e)
    }

    const handleDispatch = () => {
        dispatch(addTodo(description))
        
    }
    const resetForm = (e) => {
        e.target.reset();
    }
    
    return(
        <>
            <form onSubmit={handleTodo}  className="add-task">
                <input type="text" name="desc"  placeholder="Enter Task"/>
                <input type="text" name="time" placeholder="Enter Task Time" />  
                <button type="submit" onClick={handleDispatch} >Add Task</button>
            </form>

            {
                putTodo.map((item, index) => {
                    return(
                        <h1 key={index}>{item} </h1>
                    )
                })
            }
            
        </>
    )
}

export default Task;