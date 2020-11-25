
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin, UserProfile} from "../Models/user";


export const userProfileUpdate = async (user: UserProfile) : Promise<number> => {
    let config: AxiosRequestConfig = {
        //method: "put",
        //url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}`,
        headers: {
            "Content-Type": "application/json",
            //"X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.put(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}`, user, config).then((res) => {
        console.log(res.data)
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch(e => {

        console.log(localStorage.getItem("user_name") + "------" +  localStorage.getItem("token"))
        return 0
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

export const getUserLogin = async (userLogin: userLogin) : Promise<number> =>{
    let config: AxiosRequestConfig = {
        method: "post",
        url: `http://127.0.0.1:8000/api/users/signin`,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }
    }
    return axios.post("http://127.0.0.1:8000/api/users/signin", userLogin, config).then((res) => {
        console.log(res.data)
        if (res.status == 200) {
            let token: string = res.data.access_token;
            console.log("---->" + token)

            localStorage.setItem("token", token)
            localStorage.setItem("user_name", userLogin.user_name)
            return 1
        }
        return 0;
    }).catch(e => {
        return 0;
    })
}


export const getUserProfile = async () : Promise<UserProfile> => {
    let config: AxiosRequestConfig = {
        // method: "get",
        // url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}`,
        headers: {
            "Content-Type": "application/json",
            // "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.get(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}`, config).then((res) => {
        if (res.status == 200) {
            console.log(res.data.user.original)
            var u: UserProfile = res.data.user.original;
            return u
        }
        return null as any;
    }).catch((e) => {
        console.log("problem with update user")
    })

}


export const getPassword = async () : Promise<string> => {
    let config: AxiosRequestConfig = {
        // method: "get",
        // url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}`,
        headers: {
            "Content-Type": "application/json",
            // "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.get(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}`, config).then((res) => {
        if (res.status == 200) {
            console.log(res.data.user.original)
            return res.data
        }
        return null as any;
    }).catch((e) => {
        console.log("problem with get password")
    })

}


export const passwordUpdate = async (password: string) : Promise<number> => {
    let config: AxiosRequestConfig = {
        //method: "put",
        //url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}`,
        headers: {
            "Content-Type": "application/json",
            //"X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.put(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}`, password, config).then((res) => {
        console.log(res.data)
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch(e => {

        console.log(localStorage.getItem("user_name") + "------" +  localStorage.getItem("token"))
        return 0
    })

}

