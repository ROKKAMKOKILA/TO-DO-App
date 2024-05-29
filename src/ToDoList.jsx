import React,{useState} from "react"

function ToDoList(){
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){ 
       setNewTask(event.target.value);
       
    }
   function addTask(){      //to add task 
      if(newTask.trim !=="")
      setTasks(t =>[...t,newTask]);
      setNewTask("");
    }
    function deleteTask(index){  
      
      const updateTasks = tasks.filter((_,i) => i !== index);
      setTasks(updateTasks);
      
    }
    // function moveTaskUp(Index){

    // }
    // function moveTaskDown(Index){

    // }
    
    return(<div className="to-do-list">

        <h1>To-Do-List </h1>
      <div>
          <input
            type="text"
            placeholder="ENTER A TASK ....."
            value={newTask}
            onChange={handleInputChange}/>
          <button
            className="add-button"
            onClick={addTask}>
            Add
          </button>
      </div>
      <ol>
        {tasks.map((task,index)=>
             <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() =>deleteTask(index)}>
                Delete
              </button>
              {/* <button
                className="move-button"
                onClick={() =>moveTaskUp(index)}>
                Up
              </button>
              <button
                className="move-button"
                onClick={() =>moveTaskDown(index)}>
                Down
              </button> */}
             </li>
        )}
      </ol>
    </div>);
}
export default ToDoList