
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin} from "../Models/user";


export const userProfileUpdate = async (user: User) : Promise<User> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authentication": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post("http://localhost:8000/api/users/signout", user, config).then((res) => {
        if (res.status == 200) {
            var u: User = res.data;
            return u
        }
        return null as any;
    }).catch()

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

export const getUserLogin = async (userLogin: userLogin) : Promise<number> =>{
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://127.0.0.1:8000/api/users/signin",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }
    }
    return axios.post("http://127.0.0.1:8000/api/users/signin", userLogin, config).then((res) => {
        if (res.status == 200) {
            let token: string = res.data.access_token;
            console.log("---->" + token)
            localStorage.setItem("token", token)
            return 1
        }
        return 0;
    }).catch(e => {
        return 0;
    })
}



