import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps} from "react-router";
import "../CSS/BasePage.scss"
import {User, UserFullData} from "../Models/user";
import profileAvatar from "../Assets/Images/profile.png";
import {getUserFullData, signOut} from "../Actions/UserActions";
import {delay} from "q";

interface HeaderProps {
    state: string
}

interface IHeaderState {
    profileImage: string
}

class DashboardHeader extends React.Component<HeaderProps, IHeaderState>
{
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            profileImage: ""
        }
    }


    componentWillMount= async () => {
        // await delay(2000);
        var userData: UserFullData = await getUserFullData();
        console.log(userData)
        this.setState({profileImage: userData.avatar})
        // localStorage.setItem("image", userData.avatar)
        // if(localStorage.getItem("image") == "")
        //     this.setState({profileImage: ""})
        //console.log(localStorage.getItem("image"))
    }

    onLogoutClick =async () => {
        var response = await signOut()
        console.log(response)
        localStorage.setItem("token", "")
        localStorage.setItem("image", "")
        localStorage.setItem("xp", "")
        localStorage.setItem("user_name", "")

        // localStorage.removeItem("image")
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div className="App-header-judi">
                    JuDI
                    <a className={this.props.state==="profile" ? "active" : ""} href="/dashboard/profile">
                        <div className="circle" style={{overflow: "hidden", alignItems:"right", height:40, width:40, position:"absolute", right:20, marginTop:-50, backgroundImage: this.state.profileImage == "" ? `url(${profileAvatar}")` : `url(${localStorage.getItem("image")})`, backgroundSize: 'cover'}}>

                        </div>
                        <div style={{overflow: "hidden", alignItems:"right", fontSize: 14, color:"#3EECAC", position:"absolute", right:65, marginTop:-40}}>
                            {localStorage.getItem("xp")}XP
                        </div>
                    </a>
                    <div style={{overflow: "hidden", alignItems:"right", fontSize: 20, color:"#3EECAC", position:"absolute", left:10}}>
                        {localStorage.getItem("user_name")}
                    </div>
                </div>
                <div className="topnav">
                    <a className={this.props.state==="dashboard" ? "active" : ""} href="/dashboard">Dashboard</a>
                    <a className={this.props.state==="CRUDCard" ? "active" : ""} href="/dashboard/crudcard">Cards</a>
                    <a className={this.props.state==="ranking" ? "active" : ""} href="/dashboard/ranking">Ranking</a>
                    <div className="topnav-right">
                        <a onClick={this.onLogoutClick} href="/">
                            Logout
                        </a>

                    </div>
                </div>

            </div>
        );
    }
}




export default DashboardHeader;