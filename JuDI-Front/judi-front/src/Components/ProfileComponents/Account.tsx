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


interface AccountProps {
    accountRef: RefObject<HTMLDivElement>
    state:string
}

var displayState:string;

class Account extends React.Component<AccountProps> 
{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div ref={this.props.accountRef} style={{display: (this.props.state==="account" ? "none" : "hidden")}}>
                    account
                </div>
            </div>
        )
    }
}



export default Account;