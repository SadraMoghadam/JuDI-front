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


interface PasswordProps {
    onChangePassword: Function,
}

interface IPasswordState {
    newPasswordState: string,
    confirmPasswordState: string,
    showMessage: boolean
}
var changePassword: boolean;



class ChangePassword extends React.Component<PasswordProps, IPasswordState>
{
    constructor(props: PasswordProps) {
        super(props);
        this.state = {
            newPasswordState: "",
            confirmPasswordState: "",
            showMessage:false
        }
    }

    handlePasswordUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({newPasswordState: e.target.value});
    }

    handleconfirmPasswordState = (e: ChangeEvent<HTMLInputElement>) => {
        //
        // if(this.state.newPasswordState != this.state.confirmPasswordState)
        //     this.setState({showMessage: true})
        // else
        //     this.setState({showMessage: false})
        this.setState({confirmPasswordState: e.target.value})
        // console.log(this.state.confirmPasswordState)
        // console.log(this.state.newPasswordState)

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div className="inside-profile-alt" >
                    Password
                </div>
                <input type="password" onChange={this.handlePasswordUpdate}/>
                <div className="inside-profile-alt" >
                    Confirm Password
                </div>
                <input type="password" onChange={(e) => {
                    this.handleconfirmPasswordState(e);
                    this.props.onChangePassword(this.state.newPasswordState, this.state.confirmPasswordState);
                }}/>
                <div style={{color: "red", fontSize: 10}}>{this.state.showMessage ? "password is not the same" : ""}</div>
            </div>
        )
    }
}



export default ChangePassword;