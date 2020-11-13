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
import {User, UserProfile} from "../../Models/user";
import {getUserProfile, userProfileUpdate} from "../../Actions/UserActions";


interface AccountProps {
    accountRef: RefObject<HTMLDivElement>
    
}

interface IAccountState {
    changePassword: boolean,
    user_name: string,
    email: string,
    password: string,
    full_name: string,
    canSubmit: boolean,
    correctEmail: boolean,
}


class Account extends React.Component<AccountProps, IAccountState>
{

    constructor(props: AccountProps) {
        super(props);
        this.state = {
            changePassword: false,
            user_name: "",
            password: "SSS333",
            email: "",
            full_name: "",
            canSubmit: true,
            correctEmail: true
        }
    }

    componentWillMount =  async() => {
        // if(!this.state.email.match(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)))
        //     this.setState({correctEmail: true})
        var user = await getUserProfile();
        console.log(user.user_name)
        this.setState({
            user_name: user.user_name,
            email: user.email,
            full_name: user.full_name
        })
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

        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(reg.test(e.target.value))
            this.setState({correctEmail: true})
        else
            this.setState({correctEmail: false})
    }

    onChangefull_name = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            full_name: e.target.value
        })
    }

    onChangeuser_name = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user_name: e.target.value
        })
    }

    // onChangePassword = (newpass: string, newConfirmpass: string) => {
    //     console.log("---"+ newpass + " -- " +  newConfirmpass)
    //     if(newpass == newConfirmpass)
    //         this.setState({
    //             password: newpass,
    //             canSubmit: true
    //         })
    //     else
    //         this.setState({
    //             canSubmit: false
    //         })
    // }

    passSet = (pass: string, isConfirmed: boolean) => {
        this.setState({
            password: pass,
            canSubmit: isConfirmed
        })
    }

    currentPassCheck = (pass: string) => {
        console.log(this.state.password + "------" + pass)
        if(pass == this.state.password)
            this.setState({
                canSubmit: true
            })
        else {
            alert("current password is incorrect")
            this.setState({
                canSubmit: false
            })
        }
    }

    submit = async () => {

        var user: User = {
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password,
            full_name: this.state.full_name,
        }

        var userProfileResponse: number = await userProfileUpdate(user)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(

                <div ref={this.props.accountRef}>
                    <h2>Account</h2>
                    <div className="inside-profile-alt">
                        FullName
                    </div>
                    <input placeholder="write your Name here ..." defaultValue={this.state.full_name} onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangefull_name(e)}></input>
                    <div className="inside-profile-alt">
                        UserName
                    </div>
                    <input placeholder="you want to be known as ..." defaultValue={this.state.user_name} onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangeuser_name(e)}></input>
                    <div className="inside-profile-alt">
                        Email
                    </div>
                    <input placeholder="write your Email here ..." value={this.state.email} onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangeEmail(e)}></input>
                    <div style={{color: "red", fontSize: 10}}>{this.state.correctEmail ? "" : "Email is not correct"}</div>
                    <div style={{color: "#404040", margin:20}}>not verified yet? <a style={{fontSize:20, color:"#3EECAC"}}>Verify</a></div>
                    <div style={{margin:20}}><a style={{color:"#3EECAC"}} onClick={() => {
                        if(this.state.changePassword==true) {
                            this.setState({canSubmit: true})
                            this.setPasswordState(false)
                        }
                        else {
                            this.setState({canSubmit: false})
                            this.setPasswordState(true)
                        }
                        }}>
                            Change password</a></div>
                    {
                        this.state.changePassword == true ? <ChangePassword onChangePassword={this.passSet} passwordCheck={this.currentPassCheck}/> : null
                    }

                    <a href="/dashboard"> <button type="submit" onClick={this.submit} className="button" disabled={this.state.canSubmit && this.state.correctEmail ? false : true} style={{backgroundColor: this.state.canSubmit  && this.state.correctEmail ? "" : "gray"}}>Save Changes</button></a>
                </div>

        )
    }

}



export default Account;