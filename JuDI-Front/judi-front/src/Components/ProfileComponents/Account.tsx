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
import ChangePassword from "./ChangePassword";


interface AccountProps {
    accountRef: RefObject<HTMLDivElement>
    
}

interface IChangePassword {
    changePassword: boolean;
}


class Account extends React.Component<AccountProps, IChangePassword> 
{
    
    constructor(props: AccountProps) {
        super(props);
        this.state = {
            changePassword: false
        }
    }

    setPasswordState = (bool:boolean) => {
        this.setState({
            changePassword: bool
        })    
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div ref={this.props.accountRef}>
                    <h2>Account</h2>
                    <div className="inside-profile-alt">
                        FirstName
                    </div>
                    <input placeholder="write your Name here ..."></input>
                    <div className="inside-profile-alt">
                        UserName
                    </div>
                    <input placeholder="you want to be known as ..."></input>
                    <div className="inside-profile-alt">
                        Email
                    </div>
                    <input placeholder="write your Email here ..."></input>
                    <div style={{color: "#404040", margin:20}}>not verified yet? <a style={{fontSize:20, color:"#3EECAC"}}>Verify</a></div>
                    <div style={{margin:20}}><a style={{color:"#3EECAC"}} onClick={() => {
                        if(this.state.changePassword==true)
                            this.setPasswordState(false)
                        else
                            this.setPasswordState(true)
                        }}>
                            Change password</a></div>
                    {
                        this.state.changePassword == true ? <ChangePassword/> : null
                    }

                    <a href="/dashboard"><div className="button">Save Changes</div></a>
                </div>
            </div>
        )
    }
}



export default Account;