import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/schedule.css"


{/* <div>
<div>
    <span>
        <button>
        &laquo;
        </button>
    </span>
    <input type="text" className="form-control week-picker" placeholder="Select a Week"></input>
    <span>
        <button>
        &raquo;
        </button>
    </span>
</div>
</div> */}

class Dashboard extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    printFunction = () => {
        window.print();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
            <DashboardHeader state={"dashboard"}/>
            <div>
                <form>
            <div className="form-tbl">
            <div className="tbl-header">
                <div>
                    <h1>*** Week Board ***</h1>
                </div>
            <table>
                <thead>
                        <tr>
                            <th>
                                <div className="week-cal">
                            <input id="week" type="week" name="week" ></input>
                            </div>
                            </th>
                            <th> Task </th>
                            <th> Task </th>
                            <th> Task </th>
                            <th> Task </th>
                            <th> Task </th>
                            <th> Task </th>

                        </tr>
                </thead>
            </table>
            </div>
            <div className="tbl-content">
            <table>
                <tbody>
                        <tr>
                            <td>Sunday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                   
                 
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                         
                       
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                           
                        
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                        
                           
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                       
                      
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
              
                 
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                     
                   
                        </tr>
                </tbody>
            </table>
            <div className="set-btn-tbl">
               
                <button className= "icon-btn add-btn" ref="#popup1">
                                    <div className="add-icon"></div>
                                    <div className="btn-txt">Add Week</div>
                </button>
                <button onClick={this.printFunction} className="print-button" ><span className="print-icon"></span></button>
            </div>
                               
            </div>
            </div>
            </form>
            </div>
            </div>
          
        );
    }
}


export default Dashboard;