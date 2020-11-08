import * as React from "react";
import "../../CSS/BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p2 from "../Assets/Images/about_us.png";
import {ChangeEvent, RefObject} from "react";
import { stat } from "fs";
import { accountRef } from "../../Pages/Profile";
import {RouteComponentProps, withRouter} from "react-router";
import ChangePassword from "./ChangePassword";
import {User} from "../../Models/user";
import {postUser} from "../../Actions/UserActions";


interface AccountProps {
    accountRef: RefObject<HTMLDivElement>
    
}

interface IAccountState {
    newPassword: string,
    confirmNewPassword: string,
    changePassword: boolean,
    username: string,
    email: string,
    password: string,
    fullName: string,
    canSubmit: boolean
}


class Account extends React.Component<AccountProps, IAccountState>
{
    
    constructor(props: AccountProps) {
        super(props);
        this.state = {
            newPassword: "",
            confirmNewPassword: "",
            changePassword: false,
            username: "Scorpion33033",
            password: "SSS333",
            email: "sadra_h_m@outlook.com",
            fullName: "Sadra Moghadam",
            canSubmit: true
        }
    }

    setPasswordState = (bool:boolean) => {
        this.setState({
            changePassword: bool
        })    
    }

    onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            fullName: e.target.value
        })
    }

    onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword = (newpass: string, newConfirmpass: string) => {
        if(newpass == newConfirmpass)
            this.setState({
                password: newpass,
                canSubmit: true
            })
        else
            this.setState({
                canSubmit: false
            })
    }

    submit = async () => {
        var user: User = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            fullName: this.state.fullName
        }

        var u: User = await postUser(user)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(

                <div ref={this.props.accountRef}>
                    <h2>Account</h2>
                    <div className="inside-profile-alt">
                        FullName
                    </div>
                    <input placeholder="write your Name here ..." defaultValue={this.state.fullName} onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangeFullName(e)}></input>
                    <div className="inside-profile-alt">
                        UserName
                    </div>
                    <input placeholder="you want to be known as ..." defaultValue={this.state.username} onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangeUserName(e)}></input>
                    <div className="inside-profile-alt">
                        Email
                    </div>
                    <input placeholder="write your Email here ..." value={this.state.email} onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangeEmail(e)}></input>
                    <div style={{color: "#404040", margin:20}}>not verified yet? <a style={{fontSize:20, color:"#3EECAC"}}>Verify</a></div>
                    <div style={{margin:20}}><a style={{color:"#3EECAC"}} onClick={() => {
                        if(this.state.changePassword==true)
                            this.setPasswordState(false)
                        else
                            this.setPasswordState(true)
                        }}>
                            Change password</a></div>
                    {
                        this.state.changePassword == true ? <ChangePassword onChangePassword={this.onChangePassword}/> : null
                    }

                    <button type="submit" onClick={this.submit} className="button" disabled={this.state.canSubmit ? false : true} style={{backgroundColor: this.state.canSubmit ? "" : "gray"}}>Save Changes</button>
                </div>

        )
    }

}



export default Account;