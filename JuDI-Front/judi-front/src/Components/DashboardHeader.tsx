import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps} from "react-router";
import "../CSS/BasePage.scss"
import profileAvatar from "../Assets/Images/profile.png";

interface HeaderProps {
    state: string
}

class DashboardHeader extends React.Component<HeaderProps> 
{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div className="App-header-judi">
                    JuDI
                    <a className={this.props.state==="profile" ? "active" : ""} href="/dashboard/profile">
                    <div className="circle" style={{overflow: "hidden", alignItems:"right", height:40, width:40, position:"absolute", right:20, marginTop:-50, backgroundImage: `url(${profileAvatar})`, backgroundSize: 'cover'}}>
                        
                    </div>
                    </a>
                </div>
                <div className="topnav">
                    <a className={this.props.state==="dashboard" ? "active" : ""} href="/dashboard">dashboard</a>
                    
                    <div className="topnav-right">
                        <a href="/">logout</a>
                        
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