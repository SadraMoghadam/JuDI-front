import * as React from "react";
import "../../CSS/BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p2 from "../Assets/Images/about_us.png";
import {RefObject} from "react";


interface scoreProps {
    scoreRef: RefObject<HTMLDivElement>
    state: string
}

class Score extends React.Component<scoreProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div ref={this.props.scoreRef} style={{display: (this.props.state==="account" ? "none" : "hidden")}}>
                score
            </div>
        )
    }
}



export default Score;