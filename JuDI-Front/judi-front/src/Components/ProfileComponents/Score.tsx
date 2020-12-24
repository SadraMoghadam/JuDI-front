import * as React from "react";
import "../../CSS/BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p2 from "../Assets/Images/about_us.png";
import {RefObject} from "react";
import {UserFullData} from "../../Models/user";
import {getUserFullData} from "../../Actions/UserActions";

interface scoreState {
    xp: number
}

interface scoreProps {
    scoreRef: RefObject<HTMLDivElement>
}

class Score extends React.Component<scoreProps, scoreState>
{
    constructor(props: any) {
        super(props);
        this.state = {
            xp: 0,
        }
    }

    componentWillMount = async () => {
        var userData: UserFullData = await getUserFullData();
        console.log(userData.xp)
        this.setState({xp: userData.xp})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div ref={this.props.scoreRef}>
                <h2>Score and XP</h2>
                <div className="inside-profile-alt ">
                    <h5 style={{margin:30, textAlign: "center", marginTop: 180, fontSize: 30, color: "#3EECAC"}}>XP : {this.state.xp}</h5>
                </div>
            </div>
        )
    }
}



export default Score;