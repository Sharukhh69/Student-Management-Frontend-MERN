import { useNavigate, useParams } from "react-router-dom"
import { updateStudent } from "../api";
import { useEffect, useState } from "react";
import { getStudent } from "../api";
const EditStudent=()=>{
    const {id}=useParams()
    const navigate=useNavigate()
    const [student,setStudent]=useState({name:"",email:""})
    useEffect(()=>{
        getStudent(id).then((res)=>setStudent(res.data))
    },[id])
    const submit=async(e)=>{
        e.preventDefault()
        await updateStudent(id,student)
        navigate("/")
    }
    return(
        <div>
            <h1>Edit Student</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input required value={student.name} onChange={e=>setStudent({...student,name:e.target.value})}></input>
                <label>Email</label>
                <input required value={student.email} onChange={e=>setStudent({...student,email:e.target.value})}></input>
                <button>Update</button>
            </form>
        </div>
    )
}
export default EditStudent;