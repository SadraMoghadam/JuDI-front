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


interface PasswordProps {

}
var changePassword: boolean;

class ChangePassword extends React.Component<PasswordProps>
{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div className="inside-profile-alt">
                    Password
                </div>
                <input type="password"></input>
                <div className="inside-profile-alt">
                    Confirm Password
                </div>
                <input type="password"></input>
            </div>
        )
    }
}



export default ChangePassword;