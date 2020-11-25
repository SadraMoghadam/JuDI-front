import * as React from "react";
import "../../CSS/BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p2 from "../Assets/Images/about_us.png";
import {RefObject} from "react";
import { stat } from "fs";
import { accountRef } from "../../Pages/Profile";
import {RouteComponentProps, withRouter} from "react-router";
import createChainedFunction from "@material-ui/core/utils/createChainedFunction";
import {ChangeEvent} from "react";
import {User} from "../../Models/user";
import {userProfileUpdate} from "../../Actions/UserActions";


// interface PasswordProps {
//     onChangePassword: (newPass: string, isConfirmed: boolean) => void,
//     passwordCheck: (pass: string) => void
// }

interface PasswordProps {
    passwordRef: RefObject<HTMLDivElement>
}

interface IPasswordState {
    password: string,
    currentPasswordState: string,
    newPasswordState: string,
    showMessage: boolean,
    correctPassword: boolean,
    canSubmit: boolean
}
var changePassword: boolean;



class ChangePassword extends React.Component<PasswordProps, IPasswordState>
{
    constructor(props: PasswordProps) {
        super(props);
        this.state = {
            password: "SSS333",
            currentPasswordState: "",
            newPasswordState: "",
            showMessage:false,
            correctPassword: true,
            canSubmit: false
        }
    }



    passSet = (pass: string, isConfirmed: boolean) => {
        this.setState({
            password: pass,
            canSubmit: isConfirmed
        })
    }

    currentPassCheck = (pass: string) => {
        console.log(this.state.password + "------" + pass)
        if(pass == this.state.password && this.state.newPasswordState != "")
            this.setState({
                canSubmit: true
            })
        else if (pass != this.state.password) {
            alert("current password is incorrect")
            this.setState({
                canSubmit: false
            })
        }
    }

    handlePasswordUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        this.setState({newPasswordState: e.target.value})
        if(reg.test(e.target.value)) {
            this.setState({correctPassword: true})
            this.passSet(this.state.newPasswordState, false)
        }
        else {
            this.setState({correctPassword: false})
            this.passSet(this.state.newPasswordState, false)
        }

    }

    handleCurrentPassword = (e: ChangeEvent<HTMLInputElement>): void => {
        //this.setState({currentPasswordState: e.target.value})
        //console.log(this.state.currentPasswordState + "-------" +  e.target.value)
        this.currentPassCheck(e.target.value)
    }

    handleconfirmPasswordState = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.state.newPasswordState == e.target.value) {
            this.setState({showMessage: false})
            this.passSet(this.state.newPasswordState, true)
        } else {
            this.passSet(this.state.newPasswordState, false)
            this.setState({showMessage: true})
        }
        //
        // if(this.state.newPasswordState != thishis.state.confirmPasswordState)
        //     this.setState({showMessage: true})
        // else
        //     this.setState({showMessage: false})

        // let n : string = e.target.value
        // this.setState({confirmPasswordState: n})
        // console.log("-->" + this.state.confirmPasswordState + " "  + n)
        // console.log(this.state.confirmPasswordState)
        // console.log(this.state.newPasswordState)

    }

    submit = async () => {

        var newPassword = {
            password: this.state.password,
        }

        //var userProfileResponse: number = await userProfileUpdate(newPassword)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div ref={this.props.passwordRef}>
                <h2>Score and XP</h2>
                <div className="inside-profile-alt">
                    Current Password
                </div>
                <input type="password" onBlur={this.handleCurrentPassword}/>
                <div className="inside-profile-alt" >
                    New Password
                </div>
                <input type="password" onBlur={this.handlePasswordUpdate}/>
                <div style={{color: "red", fontSize: 10}}>{this.state.correctPassword ? "" : "Password must contain at least 8 characters and only 0-9 a-z A-Z characters"}</div>
                <div className="inside-profile-alt" >
                    Confirm Password
                </div>
                <input type="password" onChange={(e) => {
                    this.handleconfirmPasswordState(e);
                    // this.props.onChangePassword(this.state.newPasswordState, this.state.confirmPasswordState);
                }}/>
                <div style={{color: "red", fontSize: 10}}>{this.state.showMessage ? "password is not the same" : ""}</div>
                <a href="/dashboard"> <button type="submit" onClick={this.submit} className="button" disabled={this.state.canSubmit ? false : true} style={{backgroundColor: this.state.canSubmit ? "" : "gray"}}>Save Changes</button></a>
            </div>
        )
    }
}



export default ChangePassword;