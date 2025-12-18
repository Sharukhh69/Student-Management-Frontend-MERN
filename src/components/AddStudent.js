import {useState} from "react"
import {createStudent} from "../api"
import {useNavigate} from "react-router-dom"
import axios from "axios"
const API="http://localhost:5000/api/students"
const AddStudent=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const submit=async(e)=>{
        e.preventDefault()
        await axios.post(API,{name,email})
        navigate("/")
    }
    return(
        <>
            <h1>Add Student</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input required value={name} onChange={e=>setName(e.target.value)}/>
                <label>Email</label>
                <input required value={email} onChange={e=>setEmail(e.target.value)}/>
                <button>Add</button>
            </form>
        </>
    )
}
export default AddStudent;