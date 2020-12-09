import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/schedule.css"
import { faDivide } from "@fortawesome/free-solid-svg-icons";


var dragula = require('react-dragula');


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

    componentDidMount () {
        let Sun = document.getElementById('Sun');
        let Mon= document.getElementById('Mon');
        let Tue = document.getElementById('Tue');
        let Wed = document.getElementById('Wed');
        let Thu = document.getElementById('Thu');
        let Fri = document.getElementById('Fri');
        let Sat = document.getElementById('Sat');
        dragula([Sun, Mon,Tue,Wed,Thu,Fri,Sat]);
      }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
            <DashboardHeader state={"dashboard"}/>

            <form>
            <div className="form-tbl">
                <div className="tbl-header">
                    <div>
                        <h1>
                            *** WEEK BOARD ***
                        </h1>
                    </div>
                    <div className="week-cal">
                            <input id="week" type="week" name="week" ></input>
                            </div>
                </div>
                <div className="tbl-content">
                    <div id="Sun">
                        <p style={{fontSize: '1.5rem'}}>Sunday</p>
          
                    </div>
                    <div id="Mon">
                        <p style={{fontSize: '1.5rem'}}>Monday</p>
          
                    </div>
                    <div id="Tue">
                        <p style={{fontSize: '1.5rem'}}>Tuesday</p>
         
                    </div>
                    <div id="Wed">
                        <p style={{fontSize: '1.5rem'}}>Wednesday</p>
         
                    </div>
                    <div id="Thu">
                        <p style={{fontSize: '1.5rem'}}>Thursday</p>
         
                    </div>
                    <div id="Fri">
                        <p style={{fontSize: '1.5rem'}}>Friday</p>
         
                    </div>
                    <div id="Sat">
                        <p style={{fontSize: '1.5rem'}}>Saturday</p>
         
                    </div>
                </div>
                <div className="set-btn-tbl">
               
                <button className= "icon-btn add-btn">
                                    <div className="add-icon"></div>
                                    <div className="btn-txt">Add Card</div>
                </button>
                <button onClick={this.printFunction} className="print-button" ><span className="print-icon"></span></button>
            </div>
            </div>
            
            </form>

            {/* <div>
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
                            <th> Sunday </th>
                            <th> Monday </th>
                            <th> Tuesday </th>
                            <th> Wednesday </th>
                            <th> Thursday </th>
                            <th> Friday </th>
                            <th> Saturday </th>

                        </tr>
                </thead>
            </table>
            </div>
            <div className="tbl-content">
            <table>
                <tbody>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                   
                 
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                         
                       
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                           
                        
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                        
                           
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                       
                      
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
              
                 
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td className="cell-inp"><a className="button_ten" href="/dashboard/crudcard" target="_blank"></a></td>
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
               
                <button className= "icon-btn add-btn">
                                    <div className="add-icon"></div>
                                    <div className="btn-txt">Add Task</div>
                </button>
                <button onClick={this.printFunction} className="print-button" ><span className="print-icon"></span></button>
            </div>
                               
            </div>
            </div>
            </form>
            </div> */}
            </div>
          
        );
    }
}


export default Dashboard;