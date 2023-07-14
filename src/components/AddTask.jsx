



const AddTask = () => {
    return(
        <>
            <div className="component-header">
                <h2>Add Task</h2>
            </div>

            <div className="add-task">
                <input type="text"  placeholder="Enter Task"/>
                <input type="text" placeholder="Enter Task Time" />  
                <button>Add Task</button>
            </div>
        </>
    )
}

export default AddTask;