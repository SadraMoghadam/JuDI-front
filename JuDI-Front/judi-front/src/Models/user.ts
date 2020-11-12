
export interface User {
    username: string,
    password: string,
    email: string,
    fullName: string,
}

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