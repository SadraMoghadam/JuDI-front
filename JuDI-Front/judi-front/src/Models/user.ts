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

export interface UserRanking {
    user_name: string,
    xp: number,
    rank: number,
    avatar: string
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

export interface UserFullData {
    user_name: string,
    password: string,
    email: string,
    full_name: string,
    avatar: string,
    xp: number
}

const b64toBlob = (b64Data: string, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
}