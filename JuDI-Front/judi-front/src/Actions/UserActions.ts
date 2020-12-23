
import axios, {AxiosRequestConfig} from "axios";
import {User, userRegister, userLogin, UserProfile, Password, UserRanking, UserFullData} from "../Models/user";


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
        if (res.status == 200) {
            localStorage.setItem("user_name", user.user_name)
            return 1
        }
        return 0;
    }).catch(e => {

        console.log(localStorage.getItem("user_name") + "------" +  localStorage.getItem("token"))
        return 0
    })

}


export const passwordUpdate = async (password: Password) : Promise<number> => {
    let config: AxiosRequestConfig = {
        //method: "put",
        //url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}`,
        headers: {
            "Content-Type": "application/json",
            //"X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.put(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/change_password`, password, config).then((res) => {
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch(e => {

        console.log(localStorage.getItem("user_name") + "------" +  localStorage.getItem("token"))
        return 0
    })

}


export const postImage = async (image: File) : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "post",
        // url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}/upload_avatar`,
        headers: {
            "Content-Type": "multipart/form-data",
            // "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    var formData = new FormData();
    formData.append("avatar", image);

    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/upload_avatar`, formData,  config).then((res) => {
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch(e => {
            alert("picture is not uploaded");
            return 0;
        }
    )

}

export const getUserFullData = async () : Promise<UserFullData> => {
    let config: AxiosRequestConfig = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.get(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}`, config).then((res) => {
        console.log(localStorage.getItem("user_name"))
        if (res.status == 200) {
            return res.data.user
        }
        return null as any
    }).catch(e => {
        console.log("cannot get user data")
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


export const signOut = async (): Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8000/api/users/signout",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios(config).then((res) => {
        if (res.status == 200) {

            return 1
        }
        return 0
        return null as any;
    }).catch(e => {
        console.log("problem with signout")
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
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.get(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}`, config).then((res) => {
        if (res.status == 200) {
            var u: UserProfile = res.data.user;
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
            return res.data
        }
        return null as any;
    }).catch((e) => {
        console.log("problem with get password")
    })

}


export const getRanking = async () : Promise<UserRanking[]> => {
    let config: AxiosRequestConfig = {
        method: "post",
        headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/ranking`, config).then((res) => {

        if (res.status == 200) {
            return res.data[0];
        }
        return 0;
    }).catch(e => {
            alert("ranking problem");
            return null as any;
        }
    )

}


export const getAvatar = async (url: string) : Promise<string> => {
    let config: AxiosRequestConfig = {
        // method: "get",
        // url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}`,
        headers: {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*"
        }
    }

    return axios.get(url, config).then((res) => {
        if (res.status == 200) {
            var avatar: string = res.data;
            return avatar
        }
        return null as any;
    }).catch((e) => {
        console.log("problem with update user")
    })

}


export const removeAvatar = async () : Promise<number> => {
    let config: AxiosRequestConfig = {
        method: "post",
        // url: `http://localhost:8000/api/users/${localStorage.getItem("user_name")}/upload_avatar`,
        headers: {
            "Content-Type": "multipart/form-data",
            // "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    return axios.post(`http://localhost:8000/api/users/${localStorage.getItem("user_name")}/remove_avatar`, config).then((res) => {
        console.log(res.data)
        if (res.status == 200) {
            return 1
        }
        return 0;
    }).catch(e => {
            alert("picture is not deleted");
            return 0;
        }
    )

}