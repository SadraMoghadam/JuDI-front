import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import "../CSS/schedule.css"
//import { Table} from 'antd';


//const history = useHistory();
//const handleClick = () => history.push('/profile');


// const columns = [
//     {
//       title: 'Day',
//       dataIndex: 'day',
//     },
//     {
//       title: 'Task',
//       dataIndex: 'task',
//     },
//   ];
//   const data = [
//     {
//       key: '1',
//       day: 'Sunday',
//       task: 'ADD'
//     },
//     {
//       key: '2',
//       day: 'Monday',
//       task: 'ADD'
//     },
//     {
//       key: '2',
//       day: 'Tuesday',
//       task: 'ADD'
//     },
//     {
//       key: '2',
//       day: 'Thursday',
//       task: 'ADD'
//     }
  
//   ];

class Dashboard extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
            <DashboardHeader state={"dashboard"}/>
            <div className="form-tbl">
            <div className="tbl-header">
            <table>
                <thead>
                        <tr>
                            <th>Day</th>
                            <th> Task1 </th>
                            <th> Task2 </th>
                            <th> Task3 </th>
                            <th> Task4 </th>
                            <th> Task5 </th>
                        </tr>
                </thead>
            </table>
            </div>
            <div className="tbl-content">
            <table>
                <tbody>
                        <tr>
                            <td>Sunday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                 
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                       
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                           
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                      
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                 
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                   
                        </tr>
                </tbody>
            </table>
            <div className="Add-btn-tbl"><button className= "icon-btn add-btn">
                                    <div className="add-icon"></div>
                                    <div className="btn-txt">Add Card</div>
                                </button></div>
            </div>
            </div>
            </div>
          
        );
    }
}


export default Dashboard;