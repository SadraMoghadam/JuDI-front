import profileAvatar from "../Assets/Images/profile.png";
import * as React from "react";
import {useReducer} from "react";

export interface User {
    username: string,
    password: string,
    email: string,
    fullName: string,
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


export interface rUser {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}
