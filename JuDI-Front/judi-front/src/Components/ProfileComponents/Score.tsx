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
}

class Score extends React.Component<scoreProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div ref={this.props.scoreRef}>
                <h2>Score and XP</h2>
                <div className="inside-profile-alt ">
                    <h5 style={{margin:30}}>XP : 0</h5>
                    <h5 style={{margin:30}}>Number of tasks completed : 0</h5>
                    <h5 style={{margin:30}}>ranking : 100</h5>
                </div>
            </div>
        )
    }
}



export default Score;