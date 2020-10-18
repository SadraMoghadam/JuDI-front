import * as React from "react";
import AboutSite from "./AboutSite"
import AboutUs from "./AboutUs"
import {RefObject} from "react";
import { aboutUsRef, aboutSiteRef } from "../Pages/MainPage";


interface FooterProps {
    aboutUsRef: RefObject<HTMLDivElement>
    aboutSiteRef: RefObject<HTMLDivElement>
}

class Footer extends React.Component<FooterProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <AboutSite aboutSiteRef={this.props.aboutSiteRef}/>
                <AboutUs aboutUsRef={this.props.aboutUsRef}/>
            </div>
        );
    }
}
// const Footer: React.FC = () => {
//     return(
//         <div>
//             <AboutSite />
//             <AboutUs />
//         </div>
//     )
// };



export default Footer;