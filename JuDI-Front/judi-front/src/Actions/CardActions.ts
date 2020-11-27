
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin} from "../Models/user";
import {Card, CardPost, CardGet} from "../Models/Card";


export const createCard = async (card: CardPost) : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/cards`, card, config).then((res) => {
        console.log(res.data)
        if (res.status == 200 || res.status == 201) {
            return 1
        }
        return 0;
    }).catch(e => {
        console.log("problem with card create")
        return 0
    })

}

export const updateCard = async (card: Card) : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/cards`, card, config).then((res) => {
        console.log(res.data)
        if (res.status == 200 || res.status == 201) {
            return 1
        }
        return 0;
    }).catch(e => {
        console.log("problem with update user")
        return 0
    })

}

export const getCards = async () : Promise<CardGet[]> => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards/get`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards`, config).then((res) => {
        if (res.status == 200) {
            var cards: CardGet[] = res.data.cards;
            return cards
        }
        return null as any;
    }).catch((e)=>{
        console.log("problem with get cards")
    })

}




