import axios from "axios"
const API="http://localhost:5000/api/students"
export const getStudents=()=>{
    return axios.get(`${API}/allstudents`)
}

export const createStudent=(data)=>{
    return axios.post(API,data)
}

export const deleteStudent=(id)=>{
    return axios.delete(`${API}/deletestudent/${id}`)
}

export const getStudent=(id)=>{
    return axios.get(`${API}/allstudents/${id}`)
}

export const updateStudent=(id,data)=>{
    return axios.put(`${API}/updatestudent/${id}`,data)
}