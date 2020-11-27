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
import {Password, User} from "../../Models/user";
import {getPassword, passwordUpdate, userProfileUpdate} from "../../Actions/UserActions";


// interface PasswordProps {
//     onChangePassword: (newPass: string, isConfirmed: boolean) => void,
//     passwordCheck: (pass: string) => void
// }

interface PasswordProps {
    passwordRef: RefObject<HTMLDivElement>
}

interface IPasswordState {
    oldPassword: string
    password: string,
    currentPasswordState: string,
    newPasswordState: string,
    showMessage: boolean,
    correctPassword: boolean,
    canSubmit: boolean
}
var changePassword: boolean;



class ChangePassword extends React.Component<RouteComponentProps & PasswordProps, IPasswordState>
{
    constructor(props: RouteComponentProps & PasswordProps) {
        super(props);
        this.state = {
            oldPassword: "",
            password: "",
            currentPasswordState: "",
            newPasswordState: "",
            showMessage:false,
            correctPassword: true,
            canSubmit: false
        }
    }

    componentWillMount =  async() => {
        // if(!this.state.email.match(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)))
        //     this.setState({correctEmail: true})
        var user = await getPassword();
        console.log(this.state.password)
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

    handleOldPassword = (e: ChangeEvent<HTMLInputElement>) : void => {
        var oldPassword1 = e.target.value
        this.setState({
            oldPassword: oldPassword1
        })
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
        var newPassword: Password = {
            old_password: this.state.oldPassword,
            new_password: this.state.newPasswordState,
            new_password_confirmation: this.state.newPasswordState

        }
        console.log(newPassword.new_password)
        console.log(newPassword.old_password)

        var passwordResponse: number = await passwordUpdate(newPassword)
        //this.props.history.push("/")
        if(passwordResponse == 1){
            localStorage.setItem("token", "")
            this.props.history.push("/")
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div ref={this.props.passwordRef}>
                <h2>Score and XP</h2>
                <div className="inside-profile-alt">
                    Current Password
                </div>
                <input type="password" onChange={this.handleOldPassword}/>
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
                <button type="submit" onClick={this.submit} className="button" disabled={this.state.canSubmit ? false : true} style={{backgroundColor: this.state.canSubmit ? "" : "gray"}}>Save Changes</button>
            </div>
        )
    }
}



export default withRouter(ChangePassword);