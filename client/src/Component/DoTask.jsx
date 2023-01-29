import React,{ useState,useEffect } from "react"
import axios from "axios"
import Item from "./item"

const DoTask = () => {
    const [title, setTitle] = useState("")
    const [discription, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [task,setTask]=useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/gettask").then((res) => {
           setTask(res.data)
        }).catch((err) => {
           alert(err.response.data.message + " Error")
        })
     }, [])

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
        <div className="todo">
            <form className="form" onSubmit={addTask}>
            <div>
            <input className='title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} required /> 
            </div> <br/>
            <div>
            <textarea className="comment" placeholder="Discription" onChange={(e) => setDescription(e.target.value)} required /> 
            </div> <br/>
            Status of Your Work: <select className='formcontrol' onChange={(e) => setStatus(e.target.value)} defaultValue={status} required>
                <option selected>Choose</option>
                <option value="Open">Open</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input className='btn' type="submit" />
        </form>
        <div className="list">

            <Item text="Hello"/>
        </div>
        </div>
    )
}

export default DoTask