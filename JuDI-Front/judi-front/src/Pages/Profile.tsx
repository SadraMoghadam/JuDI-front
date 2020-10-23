import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/BasePage.scss"


class Profile extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="row profile-base">
                <div className="col-lg-7 col-md-7" style={{backgroundColor: "red", height:"100px"}}></div>
                <div className="col-lg-3 col-md-3" style={{backgroundColor: "blue", height:"100px"}}></div>
            </div>
        );
    }
}


export default Profile;