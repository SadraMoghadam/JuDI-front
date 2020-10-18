import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps} from "react-router";
import "../BasePage.scss"

interface HeaderProps {
    menuSectionRef: RefObject<HTMLDivElement>,
    aboutUsRef: RefObject<HTMLDivElement>,
    aboutSiteRef: RefObject<HTMLDivElement>
}

class Header extends React.Component<HeaderProps> 
{
    menuRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    slideToAboutSite = () => {
        if (this.props.aboutSiteRef.current)
            this.props.aboutSiteRef.current.scrollIntoView({behavior: "smooth"})
    }

    slideToAboutUs = () => {
        if (this.props.aboutUsRef.current)
            this.props.aboutUsRef.current.scrollIntoView({behavior: "smooth"})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <div className="App-header-judi">
                    JuDI
                </div>
                <div className="topnav">
                    <a className="active">home</a>
                    <a onClick={this.slideToAboutSite}>about website</a>
                    <a onClick={this.slideToAboutUs}>about us</a>
                    <div className="topnav-right">
                        <a href="#login">login</a>
                        <a href="#register">register</a>
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



export default Header;