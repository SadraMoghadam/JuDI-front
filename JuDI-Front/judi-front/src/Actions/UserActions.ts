
import axios, {AxiosRequestConfig} from "axios";
import {User} from "../Models/user";
import {rUser} from "../Models/user";


export const postUser = async (user: User) : Promise<User> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    return axios.post("http://localhost:8000/api/users/signout", user, config).then((res) => {
        if (res.status == 200) {
            var u: User = res.data;
            return u
        }
        return null as any;
    })

}

export const postImage = async (image: string) : Promise<string> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    return axios.post("http://localhost:8000/api/users/signout", image, config).then((res) => {
        if (res.status == 200) {
            image = res.data;
            return image
        }
        return null as any;
    })

}

export const postRegister = async (ruser: rUser) : Promise<rUser> =>{
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users",
    }
    return axios.post("http://localhost:8000/api/users", ruser, config).then((res) => {
        if (res.status == 200) {
            var u: rUser = res.data;
            return u
        }
        return null as any;
    })
}


export const getUser = async () => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    return axios(config).then((res) => {
        if (res.status == 200) {
            var u: User = res.data;
            return u
        }
        return null as any;
    })

}