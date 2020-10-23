import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/Profile.scss"
import Account from "../Components/ProfileComponents/Account";
import Avatar from "../Components/ProfileComponents/Avatar";
import Score from "../Components/ProfileComponents/Score";

export const accountRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const avatarRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const scoreRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()


var profileState = "account";

function SetState(state:string): void {
    profileState = state;
}

class Profile extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <DashboardHeader state={"profile"}/>
                <div className="profile-base">
                    <div className="row" >
                        <div className="col-lg-5 col-md-4 col-sm-12 profile-alternatives">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={()=>profileState="account"} className={profileState==="account" ? "active" : ""}>Acount</a></div>
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={()=>profileState="avatar"} className={profileState==="avatar" ? "active" : ""}>Avatar</a></div>
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={()=>profileState="score"} className={profileState==="score" ? "active" : ""} >Score and XP</a></div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12"></div>
                        <div className="col-lg-7 col-md-7 col-sm-12" style={{backgroundColor: "blue", height:"100px"}}>
                            <Account accountRef={accountRef} state={profileState}/>
                            <Avatar avatarRef={avatarRef} state={profileState}/>
                            <Score scoreRef={scoreRef} state={profileState}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Profile;