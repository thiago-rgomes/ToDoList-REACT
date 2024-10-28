import { useState } from "react"

function ToDoList(){

    const[tasks, setTasks] = useState(["Wake up", "Eat a breakfast"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        const updatedTasks = [...tasks]
        if(index <= updatedTasks.length -2){
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div>
            <h1>To-Do-List</h1>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
            
            <button className="btn-add" onClick={() => addTask()}>Add</button>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="btn-delete" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="btn-move" onClick={() => moveTaskUp(index)}>👆</button>
                    <button className="btn-move" onClick={() => moveTaskDown(index)}>👇</button>
                    </li> )}
            </ol>
        </div>
    )

}

export default ToDoList