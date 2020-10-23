import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/Profile.scss"


class Profile extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <DashboardHeader state={"profile"}/>
                <div className="profile-base" style={{margin: "0 auto", width: "75%"}}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6" style={{backgroundColor: "red", height:"100px"}}></div>
                        <div className="col-lg-4 col-md-4" style={{backgroundColor: "blue", height:"100px"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Profile;