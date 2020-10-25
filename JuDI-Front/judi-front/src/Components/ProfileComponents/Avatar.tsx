import * as React from "react";
import "../../CSS/BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p2 from "../Assets/Images/about_us.png";
import {RefObject} from "react";
import ProfilePictue from "./ProfilePictue"
import ProfilePicture from "./ProfilePictue";


interface AvatarProps {
    avatarRef: RefObject<HTMLDivElement>
}

class Avatar extends React.Component<AvatarProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div ref={this.props.avatarRef}>
                <h2>Avatar</h2>
                <ProfilePicture/>
            </div>
        )
    }
}



export default Avatar;