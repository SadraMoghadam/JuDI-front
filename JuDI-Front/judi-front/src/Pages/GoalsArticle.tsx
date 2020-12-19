import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import "../CSS/randText.css";
import p7 from "../CSS/g2.png";
import p8 from "../CSS/g1.jpg";


export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutSiteRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

class GoalsArticle extends React.Component<RouteComponentProps>{
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
                            <p className="main-hdr-news">**OUR Goals**</p>
                            <p className="hdr-news">How to Always Reach Your Goals!</p>
                            <a>
                                <img className="img-news" src={p7} alt="stress1"></img>
                                <img className="img-news" src={p8} alt="stress"></img>
                                
                            </a>
                        <div className="desc">Achieved Your Goals !</div>
                        
                        <div className="pdd-res">
                            <p>The title of this article sounds like a beautiful promise… maybe even too beautiful for 
                                your critical thinking. How could we always achieve our goals in the current context!? In the midst
                                 of so much competition, surrounded by increasingly demanding customers and with political uncertainties
                                  threatening to upset entire industries overnight, this promise is indeed hard to believe. However, 
                                  let me reiterate. It is possible to do just what the title suggests. You only need to aim at the right targets.
                                   There are goals over which you don’t have control and goals over which you can have control. It all comes down 
                                   to the distinction between outcome oriented goals and process oriented goals.</p>
                            <p>We all know the technique of increasing the business achievements of the previous year by 10% to set new business goals 
                                for the year to come. This way of doing things is quite understandable. When you run a business it’s hard to settle for 
                                the status quo. That’s because in the long run, the company will sink without a minimum of growth. It is therefore natural
                                 for the average CEO to ask their troops, year after year, to seek additional turnover and/or market shares.</p>
                            <p>First, their achievement does not depend only on the talent of those attempting to reach them. In sales the result as such is not controllable.
                                 You could be a world class seller, if your customers decide to say no, they will say no. In addition, macroeconomics 
                                 or politics can impact your market and therefore your results – in one way or another – without talent having much of 
                                 anything to do with it.</p>
                                <p>Think, for example, of the people who sold protective masks during the bird flu epidemic … 
                                    They had great results but it did not have much to do with their talent.</p>
                                
                                    <p>Now take the example of sales people selling products whose legislation changes overnight and are taken off the market.
                                         They will have bad results but it will probably not have much to do with their talent either.</p>
                                    <p>Let us also keep in mind that once out of the Big Boss’s office, these outcome goals cascade down to the lower levels, from middle managers to local managers, 
                                        and are eventually translated into individual goals for salespeople working on the field. Security margins will be taken along the way and the sum total of
                                         these individual goals will end up being greater than the initial goal… That’s how ambitious goals end up turning into unrealistic goals. In sales, 
                                         success stories happen when people get results far exceeding their objectives. Their goals were set well below what they eventually achieved. If they had only
                                          settled for their initial goals, they would have missed out on much better results. Bottom line:</p>
                                         <p>Sales results as such cannot be controlled,
                                                Goals set too high can be daunting,
                                                Goals set too low can be meaningless</p>
                                              <p>
                                              The best athletes, especially in individual sports, focus primarily on the process, i.e. 
                                              on how to execute their movements and techniques. Lynn Marriott and Pia Nilsson, two very famous golf coaches 
                                              have this expression:
                                              </p>
                                              <p>
                                              Perfection is a succession of achievable things brought together with so much continuity that their 
                                              simplicity is lost in the magnitude of the result.
                                              </p>
                                              <p>
                                              If you went over it too fast, read this sentence again. With excellence being their subject matter, the authors still put forward the notion of simplicity.
                                               To win a professional tournament you have to be really good. And that’s because this type of goal is so ambitious that
                                                these two coaches do everything to get the minds of their students away from the result. The result will only be the 
                                                consequence of a perfectly executed process, repeated over and over. Contrary to a reflex common in the corporate world,
                                                 high level sport does everything to put the focus first and foremost on the process. Once athletes manage to take their
                                                  thoughts away from the scoreboard and their mind is 100% set on executing the task at hand, they are finally focusing 
                                                  their attention on something they can control.</p>
                                              <p>
                                              Asking these questions about all the key aspects of your business formula is constructive, reassuring and stimulating.

                                            Constructive because you will have to carefully consider the steps needed to succeed. You probably know them, but are you actually putting them into practice? Are you implementing them thoroughly 
                                                and in a professional way? Are you sure you are not sidestepping any of them?
                                              </p>
                                              <p>
                                              Stimulating because by setting the right goals, you can aim for excellence. 
                                              It is exciting to discover that in business, as in sports, excellence is the consequence of a succession of
                                               achievable things brought together with so much continuity that their simplicity is lost in the magnitude of
                                                the result! (I love this quote…)
                                              </p>
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


export default GoalsArticle;