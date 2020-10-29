import * as React from "react";
import "../CSS/BasePage.scss"
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

interface ContactUsProps {
    contactUsRef: RefObject<HTMLDivElement>
}

class ContactUs extends React.Component<ContactUsProps> 
{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="about-div" ref={this.props.contactUsRef}>
                
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
                            <p style={{fontSize: 30, color: "white"}}>Contact Us<br/></p>
                            <p style={{fontSize: 20}}><hr style={{width: "50%"}}/>You can share your comments with us via the email and number below:  JuDI2020@email.com  Phone.No: 00989352289009</p>    
                        </div>
                        
                        <div className="circle circle1-width1 col-lg-6 col-md-6" style={{backgroundImage: `url(${p1})`, backgroundSize: 'contain'}}>
                            
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceIn' duration={fadeDuration2} >
                    <div className="circle1-width2 circle">
                        <p style={{fontSize: 30, color: "white"}}>Contact Us<br/></p>
                        <p style={{fontSize: 20}}><hr style={{width: "50%"}}/><br/>You can share your comments with us via the email and number below: <br/>Email: JuDI2020@email.com <br/>Phone.No: 00989352289009</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

// const ContactUs: React.FC = () => {
// };



export default ContactUs;