import * as React from "react";
import "../BasePage.scss"
import FadeIn from "react-fade-in";
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import p1 from "../Assets/Images/about_site.png";
import p2 from "../Assets/Images/about_us.png";
import {RefObject} from "react";

const fadeDuration2 = 0.5;
const fadeDuration1 = 0.5;

function onChange (isVisible:boolean) : boolean {
  return isVisible;
}

interface AboutSiteProps {
    aboutSiteRef: RefObject<HTMLDivElement>
}

class AboutSite extends React.Component<AboutSiteProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="about-div" ref={this.props.aboutSiteRef}>
                
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
                        <div className="col-lg-6 col-md-6 info-section-p" style={{left: 40}}>
                            <p style={{fontSize: 30, color: "white"}}>About Website<br/></p>
                            <p style={{fontSize: 20}}><hr style={{width: "50%"}}/>Many people are concerned about planning their daily activities.  People like to finish their activities on time.  This website can get you to your goals</p>    
                        </div>
                        
                        <div className="circle circle1-width1 col-lg-6 col-md-6" style={{backgroundImage: `url(${p1})`, backgroundSize: 'contain'}}>
                            
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceIn' duration={fadeDuration2} >
                    <div className="circle1-width2 circle">
                        <p style={{fontSize: 30, color: "white"}}>About Website<br/></p>
                        <p style={{fontSize: 20}}><hr style={{width: "50%"}}/><br/>Many people are concerned about <br/>planning their daily activities.  <br/>People like to finish their activities on time.  <br/>This website can get you to your goals</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

// const AboutSite: React.FC = () => {
// };



export default AboutSite;