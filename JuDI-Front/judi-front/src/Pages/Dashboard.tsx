import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/schedule.css"
import { faDivide } from "@fortawesome/free-solid-svg-icons";
import CardBase from "../Components/CRUDCardComponents/CardBase";
import MiniCardBase from "../Components/CRUDCardComponents/miniCardBase";
import { title } from "process";
import { miniCard } from "../Models/miniCard";


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
const newcard: miniCard ={
    id: 0,
    title: "Reading book",
    due: new Date(),
    label: "Study",
}

const newcard2: miniCard ={
    id: 1,
    title: "Go Shopping",
    due: new Date(),
    label: "Hobby",
} 

const newcard3: miniCard ={
    id: 1,
    title: "Basketball Class",
    due: new Date(),
    label: "Sport",
} 

const newcard4: miniCard ={
    id: 1,
    title: "Do Homework",
    due: new Date(),
    label: "Study",
} 

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
                            <input id="week" type="week" name="week" value="2020-W50" ></input>
                            </div>
                </div>
                <div className="tbl-content">
                <div className="row">
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Sunday</p>
                    </div>
                    <div id="Sun" >
                        <MiniCardBase mcard={newcard} />
                        <MiniCardBase mcard={newcard2} />
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Monday</p>
                    </div>
                    <div id="Mon" >
        
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Tuesday</p>
                    </div>
                    <div id="Tue" >

                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Wednesday</p>
                    </div>
                    <div id="Wed" >

                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="total-hdr col-lg-3 col-md-4 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Thursday</p>
                    </div>
                    <div id="Thu" >
                        <MiniCardBase mcard={newcard3} />
                    </div>
                    </div>

                    <div className="total-hdr col-lg-3 col-md-4 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Friday</p>
                    </div>
                    <div id="Fri" >
               
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-4 col-sm-6">
                    <div className="hdr-minicard">
                                <p style={{fontSize: '1.5rem'}}>Saturday</p>
                    </div>
                    <div id="Sat" >
                        <MiniCardBase mcard={newcard4} />
                    </div>
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