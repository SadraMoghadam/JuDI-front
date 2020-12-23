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

    // timeout(ms:number) { //pass a time in milliseconds to this function
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    componentWillMount= async () => {
        // await delay(2000);
        var userData: UserFullData = await getUserFullData();
        console.log(userData)
        this.setState({profileImage: userData.avatar})
        // localStorage.setItem("image", "")
        // localStorage.setItem("image", userData.avatar)
        // if(localStorage.getItem("image") == "")
        //     this.setState({profileImage: ""})
        //console.log(localStorage.getItem("image"))
    }

    onLogoutClick =async () => {
        var response = await signOut()
        console.log(response)
        localStorage.setItem("token", "")
        // localStorage.removeItem("image")
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div className="App-header-judi">
                    JuDI
                    <a className={this.props.state==="profile" ? "active" : ""} href="/dashboard/profile">
                        <div className="circle" style={{overflow: "hidden", alignItems:"right", height:40, width:40, position:"absolute", right:20, marginTop:-50, backgroundImage: this.state.profileImage == "" ? `url(${profileAvatar}")` : `url(${this.state.profileImage})`, backgroundSize: 'cover'}}>

                        </div>
                        <div style={{overflow: "hidden", alignItems:"right", fontSize: 10, color:"#3EECAC", position:"absolute", right:65, marginTop:-40}}>
                            profile
                        </div>
                    </a>
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

// const Header: React.FC = () => {
//     return(
//         <div>
//             <div className="App-header-judi">
//                 JuDI
//             </div>
//             <div className="topnav">
//                 <a className="active" href="#home">home</a>
//                 <a href="#about_site">about website</a>
//                 <a href="#about_us">about us</a>
//                 <div className="topnav-right">
//                     <a href="#login">login</a>
//                     <a href="#register">register</a>
//                 </div>
//             </div>
            
//         </div>
//     );
// };



export default DashboardHeader;