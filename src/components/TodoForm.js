import React from "react";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom'

function TodoForm({addTodo}) {
  const navigate = useNavigate();

  let todo = {
    id: "",
    task: "",
    completed: false,
    startTime: "",
    endTime: ""
  };

  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    if(e.target[0].value.trim() && e.target[1].value && e.target[2].value){
      todo = {...todo, task:e.target[0].value, startTime: e.target[1].value, endTime: e.target[2].value};
      console.log(todo);
      await addTodo({...todo, id: uuid()});
      navigate("/");
    }else {
      alert("All fields are compulsory")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-to-do">
      <div className="form-control">
        <label htmlFor="task">Task: </label>
        <input name="task" id="task" type="text" placeholder="Add a to-do" defaultValue={""}/>
      </div>
      <div className="form-control">
        <label htmlFor="startTime" >Start Time: </label>
        <input name="startTime" id="startTime" type='time' placeholder="Start time" defaultValue={""}/>
      </div>
      <div className="form-control">
        <label htmlFor="endTime" >End Time: </label>
        <input name="endTime" id="endTime" type='time' placeholder="End time" defaultValue={""}  />
      </div>
      <button type="submit">Add</button>
    </form>
  )

  
}


export default TodoForm;