
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin} from "../Models/user";
import {Card, CardPost, CardGet, Label, LabelGet} from "../Models/Card";
import {number} from "prop-types";


export const getWeekboardCards = async (days: string[]) : Promise<CardGet[][]> => {
    let config: AxiosRequestConfig = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    var content = {
        days: days
    }
    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/weekboard`, content, config).then((res) => {
        console.log(res.data)
        if (res.status == 200) {
            return res.data.cards
        }
        return null as any;
    }).catch(e => {
        alert(e)
        console.log("problem with weekboard")
        return null as any
    })

}