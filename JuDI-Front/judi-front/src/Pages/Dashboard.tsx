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
import {ChangeEvent} from "react"


var dragula = require('react-dragula');

interface MiniCardsState {
    cards: miniCard[]
}


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
    due: new Date(2020,12,11),
    label: "Study",
}

const newcard2: miniCard ={
    id: 1,
    title: "Go Shopping",
    due: new Date(2020,12,11),
    label: "Hobby",
} 

const newcard3: miniCard ={
    id: 1,
    title: "Basketball Class",
    due: new Date(2021,2,11),
    label: "Sport",
} 

const newcard4: miniCard ={
    id: 1,
    title: "Do Homework",
    due: new Date(2020,12,10),
    label: "Study",
} 

// Date.prototype.getWeek = function() {
//   var date = new Date(this.getTime());
//   date.setHours(0, 0, 0, 0);
//   date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
//   var week1 = new Date(date.getFullYear(), 0, 4);
//   return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
// }

// function getDateRangeOfWeek(weekNo: number, y: string | number){
//     var d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
//     d1 = new Date(''+y+'');
//     numOfdaysPastSinceLastMonday = d1.getDay() - 1;
//     d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
//     d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())));
//     rangeIsFrom = d1.getDate();
//     d1.setDate(d1.getDate() + 6);
//     return rangeIsFrom;
// };

//console.log(getDateRangeOfWeek(50, 2020));

function getDateOfWeek(w: number, y: number) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}



class Dashboard extends React.Component<RouteComponentProps, MiniCardsState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
                cards: [
                    {
                        id: 0,
                        title: "Reading book",
                        due: new Date(),
                        label: "Study",
                    },
                    {
                        id: 1,
                        title: "Go Shopping",
                        due: new Date(),
                        label: "Hobby",
                    },
                    {
                        id: 2,
                        title: "Basketball Class",
                        due: new Date(),
                        label: "Sport",
                    },
                    {
                        id: 3,
                        title: "Do Homework",
                        due: new Date(),
                        label: "Study",
                    }
                ]
        }
    }

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    printFunction = () => {
        window.print();
    }

    handleDateUpdate = (e: ChangeEvent<HTMLInputElement>): void=> {
        var date = e.target.value
        console.log(date)
        var newDate = date.split(/-W/)
        var year = parseInt(newDate[0])
        var weekNum = parseInt(newDate[1])
        console.log(year)
        console.log(weekNum)
        var thatdate = getDateOfWeek(weekNum,year).toString();
        console.log(getDateOfWeek(weekNum,year))
        var res = thatdate.substring(8,10);
        console.log(res)
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

      showMiniCards = () => {

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
                            <input id="week" type="week" name="week" onChange={this.handleDateUpdate} ></input>
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
                                    <div className="btn-txt"><a href="/dashboard/crudcard">ADD CARD</a></div>
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