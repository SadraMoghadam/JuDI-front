import profileAvatar from "../Assets/Images/profile.png";
import * as React from "react";
import {useReducer} from "react";

export interface User {
    user_name: string,
    password: string,
    email: string,
    full_name: string,
}

export interface UserProfile {
    user_name: string,
    email: string,
    full_name: string,
}

export interface Password {
    old_password: string,
    new_password: string,
    new_password_confirmation: string,
}

export interface UserAvatar {
    image: string
}

//export class UserGlobalVars {
//    public static ProfileImage: string = `url(${profileAvatar})`;
//}

//interface IContextProps {
//    state: UserAvatar;
//    dispatch: (user: UserAvatar) => void;
//}

//export const AdminStore = React.createContext({} as IContextProps)


export interface userRegister {
    user_name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export interface userLogin {
    user_name: string,
    password: string,
}
