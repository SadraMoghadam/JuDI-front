import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import "../CSS/randText.css";
import p7 from "../CSS/time1.jpg";
import p8 from "../CSS/time3.png";
import p9 from "../CSS/time2.jpg";

export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutSiteRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

class ManageTime extends React.Component<RouteComponentProps>{
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
                            <p className="main-hdr-news">**OUR Time**</p>
                        <p className="hdr-news">HOW TO MANAGE YOUR TIME ?!</p>
                            <a>
                                <img className="img-news" src={p7} alt="stress1"></img>
                                <img className="img-news" src={p8} alt="stress"></img>
                                <img className="img-news" src={p9} alt="stress3"></img>
                                
                            </a>
                        <div className="desc">Your Time Is Your Life</div>
                        
                        <div className="pdd-res">
                            <p>If you don’t have a plan, it’s a lot easier to waste time between projects
                                 figuring out what to do next. And if you’ve been procrastinating on one 
                                 of those duties, knock it out first. “It feels so good to get it done, and 
                                 then you can fly through the rest of the day because you’ve gotten something
                                  done that you thought was going to be horrendous.”</p>
                            <p>Not every planning tool will work for everyone. Some people prefer to keep all
                                 their schedules digital or on paper, while others like a mix of both. The 
                                 medium doesn’t matter so long as it’s something you will actually use 
                                 regularly. </p>
                            <p>Set aside specific times to check and respond to email, work on longer 
                                projects, and plan your schedule. (You have to plan the planning, too!)
Kronick encourages being realistic with this, leaving blocks of time for unexpected duties and breaks and 
“buffer time” between meetings and other scheduled events. She says you don’t want to get to lunch and think, “I didn’t get any of those things
 done that I had on my calendar because I was unrealistic.”</p>
                                <p>Allow employees to debrief and collect their to-do lists and action
                                     items from one meeting before rushing off to another. And sending 
                                     out agendas before meetings can help them run on time.</p>
                                
                                    <p>Lately, I’ve found it helpful to break some of my days in half,
                                        spending mornings in the office and afternoons working from home. That way, I can have meetings first, 
                                        and people can find me for any last-minute needs. Then, I get to spend the second half of the 
                                        day with my head down, working harder on projects that require my full attention. I block that
                                         at-home time off on my calendar so my colleagues know I won’t be responding to them right away 
                                         during that time. It really cuts down on interruptions and distractions, and it ensures that I 
                                         keep some time for my own projects. Can’t work from home? Kronick suggests finding an unused 
                                         conference room in a quiet part of the office.</p>
                                    <p>There are numerous strategies you could try for managing your inbox. You could set certain blocks 
                                        of time—maybe two or three each day, or, in more customer-service heavy roles, one per hour—to check
                                         email, instead of refreshing it constantly. The frequency doesn’t matter so much as setting a 
                                         routine so you don’t live in your inbox all day long. You can communicate this to your team and 
                                         your customers to keep them aware of your schedule and manage their expectations for your responses.</p>
                                         <p>Kronick’s rule of thumb is the three-volley rule: “If an email has gone back and forth more than three 
                                             times trying to get an issue resolved, it’s just so much easier to
                                              pick up the phone or go talk to somebody face to face.” Keep track of the efficiency of 
                                              your conversations so you know when to walk away from your keyboard and finish the chat in person.</p>
                                              <p>
                                              Kronick likes to use specific terms to start email subject lines when she’s
                                               asking for something. Words like “request,” “reminder,” “FYI,” and “urgent” give
                                                the recipient a rough idea of the nature of the email. If something is 
                                                time-sensitive, include that in the subject line as well. It helps people keep 
                                                track of their requests.
“For example,” she says, “with one of my assistants, I might say:
 Request: Needing workshop materials by Friday, May 19th. My
 eyes go to that email quickly because I know it’s time-sensitive.”
                                              </p>
                                              <p>
                                              Social media is a given in most workplaces nowadays, but it shouldn’t burden your day. Kronick encourages
                                               the use of timers so you know exactly when to close the tab and work on something else. 
                                               She also recommends adjusting notifications on your phone so it’s not buzzing and distracting 
                                               you all day long.
                                              </p>
                                              <p>
                                              Instead of splitting your attention between multiple things, separate your time so you can give each task your full attention. When we 
                                              multitask, Kronick says, it takes us longer to complete tasks, we’re more likely to make mistakes, 
                                              and our short-term memories suffer. It seems counterintuitive, but multitasking puts stress on our
                                               brains that ultimately reduces productivity.
                                              </p>
                                              <p>
                                              Whether it’s a day off, a weekend away, or a lengthy vacation, it’s important to plan time away. If we don’t put those on our calendars, Kronick says, 
                                              it’s easy to forget and work straight through them. She suggests doing this with exercise and daily 
                                              personal duties, too, to make yourself a priority.
                                              </p>
                                              <p>
                                              The truth is, you can’t really be productive if you’re overly tired or working too much. Get enough sleep,
                                               eat nutritious food, exercise, and take breaks. Be kind to yourself!
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


export default ManageTime;