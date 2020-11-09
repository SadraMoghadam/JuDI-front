import profileAvatar from "../Assets/Images/profile.png";
import * as React from "react";
import {useReducer} from "react";

export interface User {
    username: string,
    password: string,
    email: string,
    fullName: string,
}

export interface UserProfile {
    image: string
}

export class UserGlobalVars {
    public static ProfileImage: string = `url(${profileAvatar})`;
}

interface IContextProps {
    state: UserProfile;
    dispatch: (user: UserProfile) => void;
}

export const AdminStore = React.createContext({} as IContextProps)


