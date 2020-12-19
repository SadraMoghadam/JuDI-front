import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import "../CSS/randText.css";
import p4 from "../CSS/stress.jpg";
import p7 from "../CSS/time2.jpg";
import p6 from "../CSS/g2.png";

export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutSiteRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

class MainPage extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div id="overlay" className="cover blur-in">
                <Header aboutUsRef={aboutUsRef}
                        aboutSiteRef={aboutSiteRef}
                        menuSectionRef={menuSectionRef}
                        />
                {/** END nav  **/}

                <div className="main-page-body">
                    <br></br>
                    <br></br>
                    <h1>Welcome To JuDI</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="responsive2">
                        <h1 className="main-hdr-news">Click Photos To Read Our Articles</h1>
                        <div className="containerr">
	                    <div id="proparallax">
		                <a href="/Stress"><img className="one" src={p4} /> </a>
		                <a href="/ManageTime"><img className="two" src={p7} /> </a>
		                <a href="/GoalsArticle"><img className="three" src={p6} /> </a>
	                    </div>
                    </div>
                    </div>
                   </div>

      
            
             
                {/** footer **/}
                <Footer aboutUsRef={aboutUsRef}
                        aboutSiteRef={aboutSiteRef}
                        contactUsRef={contactUsRef}/>
         
                {/** loader **/}
                <Loader/>
</div>

          
        );
    }
}


export default MainPage;