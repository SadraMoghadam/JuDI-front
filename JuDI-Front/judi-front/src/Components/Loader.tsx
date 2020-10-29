
import * as React from "react";


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