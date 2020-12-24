import axios, {AxiosRequestConfig} from "axios";
import {stickyNote , NoteGet, NotePost} from "../Models/StickyNote";

export const getNote = async () : Promise<NoteGet> => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `http://localhost:8000/api/users/${ localStorage.getItem("user_name")}/monthboard`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.get(`http://localhost:8000/api/users/${ localStorage.getItem("user_name")}/monthboard`, config).then((res) => {
        console.log(res)
        if (res.status == 200) {
            var notes: NoteGet[] = res.data;
            return notes
        }
        return null as any;
    }).catch((e)=>{
        console.log("problem with get notes")
    })

}

export const postNote = async (note:NotePost) : Promise<Number> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: `http://localhost:8000/api/users/${ localStorage.getItem("user_name")}/monthboard/update`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${ localStorage.getItem("user_name")}/monthboard/update`, note, config).then((res) => {
       console.log(res) 
    if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch((e)=>{
        console.log("problem with get notes")
        return 0;
    })

}