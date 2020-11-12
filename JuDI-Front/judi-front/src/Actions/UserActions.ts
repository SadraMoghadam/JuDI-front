
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin} from "../Models/user";


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

export const postRegister = async (userRegister: userRegister) : Promise<userRegister> =>{
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    return axios.post("http://127.0.0.1:8000/api/users", userRegister, config).then((res) => {
        if (res.status == 200) {
            var u: userRegister = res.data;
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


// export const getUserLogin = async () : Promise<string> => {
//     let config: AxiosRequestConfig = {
//         method: "post",
//         url: "http://127.0.0.1:8000/api/users/signin",
//         headers: {
//             "Content-Type": "application/json",
//             "X-Requested-With": "XMLHttpRequest"
//         }
//     }
//     return axios(config).then((res) => {
//         console.log(res.statusText)
//         if (res.status == 200) {
//             var u: userLogin = res.data;
//             return res.statusText
//         }
//         return res.statusText;
//     })
// }

export const getUserLogin = async (userLogin: userLogin) : Promise<string> =>{
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://127.0.0.1:8000/api/users/signin",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    return axios.post("http://127.0.0.1:8000/api/users/signin", userLogin, config).then((res) => {
        if (res.status == 200) {
            var u: userRegister = res.data;
            return res.statusText
        }
        return res.statusText;
    })
}



