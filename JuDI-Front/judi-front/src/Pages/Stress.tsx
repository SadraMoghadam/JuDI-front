import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import "../CSS/randText.css";
import p4 from "../CSS/stress.jpg";
import p5 from "../CSS/stress2.png";
import p6 from "../CSS/stress3.jpg";

export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutSiteRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

class Stress extends React.Component<RouteComponentProps>{
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="responsive">
                      
                        <div className="gallery">
                            <p className="main-hdr-news">**OUR STRESS**</p>
                        <p className="hdr-news">HOW TO MANAGE YOUR STRESS ?!</p>
                            <a>
                                <img className="img-news" src={p5} alt="stress1"></img>
                                <img className="img-news" src={p4} alt="stress"></img>
                                <img className="img-news" src={p6} alt="stress3"></img>
                                
                            </a>
                        <div className="desc">Break down stress and smile !</div>
                        
                        <div className="pdd-res">
                            <p>Stress is a very common condition in our society. Usually,
                                 it is characterized by a great worry caused by a difficult situation. It is hard not 
                                 to suffer from it throughout our life as we live in a world in which being calm and relaxed is a 
                                 luxury. What is important here is to know how to cope with it when we find ourselves in that situation. 
                                 As you all know, stress can be caused by multiple factors, for instance, work, studies, relationships 
                                 or personal problems. Nevertheless, not everyone gets stressed by the same things. Obviously, resilience 
                                 plays an important role when referring to stress. You can be more or less tolerant to certain situations. 
                                 If you are less capable of coping with life challenges, changes and unpleasant situations, you will 
                                 probably experience more stress than someone who does.</p>
                            <p>In order to live peacefully and calm, it is crucial to learn how to manage stress. </p>
                            <p>Of course it does. An stressful situation can lead to a physical reaction known as stress response. When this happens, 
                                the brain releases a warning message to the muscles and the adrenal glands. The adrenal glands are responsible 
                                for releasing the stress hormones such as, adrenaline and cortisol. In that moment, a mechanism of response to 
                                stress starts in our body. Therefore, we experience our heart starts beating faster, there is a rise in our blood 
                                pressure and our breath accelerates. These mechanisms are the response of our body towards an stressing or apparently 
                                dangerous situation. These reactions are also known as “fight or flight” response.</p>
                                <p>Experiencing stress is not rare, but  if it is not well managed, it can lead to physical or mental damage. 
                                    According to Harvard Health Publishing, many reports have shown that stress can be really damaging if untreated. 
                                    What is more, it can become a chronic disease if it is not reversed on time. Indeed, chronic stress can carries serious 
                                    health consequences. Among them we find insomnia, anxiety, muscle main, high blood pressure and a weakened immune system. 
                                    However, it can also lead to depression, heart disease and obesity. Considering all this, it is important to take stress 
                                    seriously and start changing some of our actions in order to prevent it. If you seek help on how to manage stress, you can 
                                    ask one our top doctors. Your health is our priority.</p>
                                    <h4>Causes and symptoms of stress</h4>
                                    <p>Symptoms vary from one person to another, some of them can be physical, experiencing back pain, headaches, indigestion or heart palpitations. 
                                        But others can involve our mental and emotional sphere. In this second group we find symptoms such as irritability, 
                                        being constantly crying, impatience, anger, dysfunctional sleep or communication problems. It is important to be able to 
                                        identify these symptoms to start feeling better. Therefore, here you can find some of the most common ones: feeling pressured or 
                                        overwhelmed, being impatient, experiencing physical pain, communication problems and sleep deprivation.</p>
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


export default Stress;

