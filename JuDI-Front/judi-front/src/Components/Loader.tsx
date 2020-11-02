
import * as React from "react";

var r_text = new Array ();
r_text[0] = "If you want to achieve greatness stop asking for permission";
r_text[1] = "To live a creative life, we must lose our fear of being wrong";
r_text[2] = "I have not failed. I’ve just found 10,000 ways that won’t work. ~Thomas A. Edison";
r_text[3] = "Life is not about finding yourself. Life is about creating yourself. ~Lolly Daskal";
r_text[4] = " You must expect great things of yourself before you can do them. ~Michael Jordan";
r_text[5] = "“You must be the change you wish to see in the world.” ~Gandhi";
r_text[6] = "The only way to do great work is to love what you do. – Steve Jobs";
r_text[7] = "Life is a mirror and will reflect back to the thinker what he thinks into it";
r_text[8] = "Sometimes it is the smallest decisions that can change your life forever";
r_text[9] = "Always do your best. What you plant now, you will harvest later";

var i = Math.floor(r_text.length * Math.random());
document.write("<br /><center><FONT SIZE=5>"+r_text[i]+"</FONT></center><br />");

class Loader extends React.Component<any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <p>{/** Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. **/}
                    Copyright &copy;
                    All rights reserved | Developed by JuDI team
                    {/** Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. **/}
                </p>
                <div id="ftco-loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">
                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                                stroke="#eeeeee"/>
                        <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                                stroke-miterlimit="10" stroke="#3EECAC"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default (Loader)