
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin} from "../Models/user";
import {Card, CardPost, CardGet, Label, LabelPost} from "../Models/Card";
import {number} from "prop-types";


export const createCard = async (card: CardPost) : Promise<CardGet> => {
    let config: AxiosRequestConfig = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/cards`, card, config).then((res) => {
        console.log(res.data)
        if (res.status == 200 || res.status == 201) {
            console.log(res.data.card)
            return res.data.card
        }
        return null as any;
    }).catch(e => {
        console.log("problem with card create")
        return null as any
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
    return axios.get(`http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards/get`, config).then((res) => {
        if (res.status == 200) {
            var cards: CardGet[] = res.data.cards;
            return cards
        }
        return null as any;
    }).catch((e)=>{
        console.log("problem with get cards")
    })

}

export const deleteCard = async (id : number) : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "delete",
        url: `http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards/remove/${id}`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.delete(`http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards/remove/${id}`, config).then((res) => {
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch((e)=>{

        console.log("problem with get cards")
        return 0;
    })

}


export const updateCard = async (id : number) : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "put",
        url: `http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards/update/${id}`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    console.log(localStorage.getItem("token"))
    console.log(localStorage.getItem("user_name"))

    return axios.put(`http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/cards/update/${id}`, config).then((res) => {
        console.log(res.data)
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch((e)=>{

        console.log("problem with update card")
        return 0;
    })

}


export const createLabel = async (label: LabelPost) : Promise<Label> => {
    let config: AxiosRequestConfig = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/labels`, label, config).then((res) => {
        console.log(res.data)
        if (res.status == 200 || res.status == 201) {
            console.log(res.data.label)
            return res.data.label
        }
        return 0;
    }).catch(e => {
        console.log("problem with label create")
        return 0
    })

}


export const getLabels = async () : Promise<Label[]> => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/labels`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.get(`http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/labels`, config).then((res) => {
        console.log("--------" + res.data)
        if (res.status == 200) {
            var labels: Label[] = res.data.labels;
            return labels
        }
        return null as any;
    }).catch((e)=>{
        console.log("problem with get cards")
    })

}


export const deleteLabel = async (id : number) : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "delete",
        url: `http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/labels/${id}`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.delete(`http://localhost:8000/api/users/${await localStorage.getItem("user_name")}/labels/${id}`, config).then((res) => {
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch((e)=>{

        console.log("problem with get cards")
        return 0;
    })

}

