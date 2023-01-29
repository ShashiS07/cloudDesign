import React,{useState} from 'react'
import axios from "axios"
import "./todo.css"

const Todo=()=>{
    const [title, setTitle] = useState("")
    const [discription, setDescription] = useState("")
    const [status, setStatus] = useState("")

    const addTask = (event) => {
        event.preventDefault()
        axios.post("http://localhost:4000/createtask", { title, discription, status })
           .then((res) => {
              alert(res.data.message)

           }).catch((err) => {
              alert(err.message)
           })
     }

    return (
    <div className='container'>
       <form onSubmit={addTask}>
          <h1>TODO LIST</h1>
          <input className='form-control' placeholder='Title' onChange={(e) => setTitle(e.target.value)} required />
          <input className='form-control' placeholder='Discription' onChange={(e) => setDescription(e.target.value)} required />
          <select className='form-control' id="inputGroupSelect01" onChange={(e) => setStatus(e.target.value)} defaultValue={status} required>
             <option selected>Choose</option>
             <option value="Open">Open</option>
             <option value="In-Progress">In-Progress</option>
             <option value="Completed">Completed</option>
          </select>
          <input className='btn' type="submit" />
       </form>
    </div>
    )
}

export default Todo