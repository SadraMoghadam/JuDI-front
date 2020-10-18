import * as React from "react";
import "../BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p2 from "../Assets/Images/about_us.png";
import {RefObject} from "react";

const fadeDuration2 = 0.5;
const fadeDuration1 = 0.5;

function onChange (isVisible:boolean) : boolean {
  return isVisible;
}

interface AboutUsProps {
    aboutUsRef: RefObject<HTMLDivElement>
}

class AboutUs extends React.Component<AboutUsProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="about-div" ref={this.props.aboutUsRef}>
                
                {/**
                <VisibilitySensor>
                    {({isVisible}) =>
                      <FadeIn >
                      
                      </FadeIn>
                    }
                </VisibilitySensor>
                **/}
                <ScrollAnimation animateIn='fadeIn' duration={fadeDuration1} >
                    <div className="row info-section">
                        <div className="circle2-width1 circle col-lg-6 col-md-6" style={{backgroundImage: `url(${p2})`, backgroundSize: 'contain'}}>
    
                        </div>
                        <div className="col-lg-6 col-md-6 info-section-p" style={{left: 250}}>
                            <p style={{fontSize: 30, color: "white"}}>About Us<br/></p>
                            <p style={{fontSize: 20}}><hr style={{width: "50%"}}/>We are 4 students and this is our software engineering project.<br/>You can contact us via the following email<br/>sadra_h_m@outlook.com</p>    
                        </div>
                        
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceIn' duration={fadeDuration2} >
                    <div className="circle2-width2 circle" >
                        <p style={{fontSize: 30, color: "white"}}>About Us<br/></p>
                        <p style={{fontSize: 20}}><hr style={{width: "50%"}}/><br/>We are 4 students and this <br/>is our software engineering project.<br/>You can contact us via <br/>the following email<br/>sadra_h_m@outlook.com</p>    
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

// const AboutSite: React.FC = () => {
    
//     return(
//         <div className="about-div">
            
//             {/**
//             <VisibilitySensor>
//                 {({isVisible}) =>
//                   <FadeIn >
                  
//                   </FadeIn>
//                 }
//             </VisibilitySensor>
//             **/}
//             <ScrollAnimation animateIn='fadeIn' duration={fadeDuration1} >
//                 <div className="info-section">
//                     <div className="circle2-width1" id="circle" style={{backgroundImage: `url(${p2})`, backgroundSize: 'contain' ,margin: 10}}>

//                     </div>
//                 </div>
//             </ScrollAnimation>
//             <ScrollAnimation animateIn='bounceIn' duration={fadeDuration2} >
//                 <div className="circle2-width2" id="circle">

//                 </div>
//             </ScrollAnimation>
//             <p>{/** Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. **/}
//                 Copyright &copy;
//                 All rights reserved
//                 {/** Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. **/}
//             </p>
//         </div>
//     )
// };



export default AboutUs;