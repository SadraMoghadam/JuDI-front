import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/Profile.scss"
import "../CSS/Base.scss"
import Account from "../Components/ProfileComponents/Account";
import Avatar from "../Components/ProfileComponents/Avatar";
import Score from "../Components/ProfileComponents/Score";
import ChangePassword from "../Components/ProfileComponents/ChangePassword";

export const accountRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const avatarRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const scoreRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const passwordRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

interface IProfileState {
    profileState: string
    checkRef: RefObject<HTMLDivElement>
}


class Profile extends React.Component<RouteComponentProps, IProfileState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            profileState: "account",
            checkRef: accountRef
        }
    }

    setProfileState = (state: string, ref: RefObject<HTMLDivElement>) => {
        this.setState({
            profileState: state,
            checkRef: ref
        })    
    }

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <DashboardHeader state={"profile"}/>
                <div className="profile-base">
                    <div className="row" >
                        <div className="col-lg-4 col-md-4 col-sm-12 profile-alternatives">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={() => this.setProfileState("account", accountRef)} className={this.state.profileState==="account" ? "active" : ""}>Account</a></div>
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={() => this.setProfileState("avatar", avatarRef)} className={this.state.profileState==="avatar" ? "active" : ""}>Avatar</a></div>
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={() => this.setProfileState("change password", passwordRef)} className={this.state.profileState==="change password" ? "active" : ""} >ChangePassword</a></div>
                                <div className="col-lg-12 col-md-12 col-sm-4 alt" style={{fontSize:25}}><a onClick={() => this.setProfileState("score", scoreRef)} className={this.state.profileState==="score" ? "active" : ""} >Score and XP</a></div>

                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12" style={{height:"10px"}}></div>
                        <div className="col-lg-7 col-md-7 col-sm-12 profile-parts">
                            {
                                this.state.profileState == "account" ? 
                                <Account accountRef={accountRef}/>
                                :
                                this.state.profileState == "avatar" ?
                                <Avatar avatarRef={avatarRef}/>
                                :
                                this.state.profileState == "score" ?
                                <Score scoreRef={scoreRef}/>
                                :
                                <ChangePassword passwordRef={passwordRef}/>
                            }
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Profile;