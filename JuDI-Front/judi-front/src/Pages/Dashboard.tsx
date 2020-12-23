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
import {ConvertDate, getFirstDayOfWeek, getWeekDays} from "../Models/Card";
import UserRankShow from "../Components/RankingComponents/UserRankShow";
import {getAvatar, getUserFullData} from "../Actions/UserActions";
import {UserFullData} from "../Models/user";
import {file} from "@babel/types";


var dragula = require('react-dragula');

interface MiniCardsState {
    cards: miniCard[],
    weekDays: string[]
}


// const newcard: miniCard ={
//     id: 0,
//     title: "Reading book",
//     due: new Date(2020,12,11),
//     label: "Study",
// }
//
// const newcard2: miniCard ={
//     id: 1,
//     title: "Go Shopping",
//     due: new Date(2020,12,11),
//     label: "Hobby",
// }
//
// const newcard3: miniCard ={
//     id: 1,
//     title: "Basketball Class",
//     due: new Date(2021,2,11),
//     label: "Sport",
// }
//
// const newcard4: miniCard ={
//     id: 1,
//     title: "Do Homework",
//     due: new Date(2020,12,10),
//     label: "Study",
// }


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
                    due: "2020-12-23",
                    label: "Study",
                },
                {
                    id: 1,
                    title: "Go Shopping",
                    due: "2020-12-23",
                    label: "Hobby",
                },
                {
                    id: 2,
                    title: "Basketball Class",
                    due: "2020-12-24",
                    label: "Sport",
                },
                {
                    id: 3,
                    title: "Do Homework",
                    due: "2020-12-26",
                    label: "Study",
                },
                {
                    id: 4,
                    title: "play",
                    due: "2020-12-21",
                    label: "Game",
                },
                {
                    id: 5,
                    title: "y",
                    due: "2020-12-30",
                    label: "Game",
                }],
            weekDays: []
        }
    }

    componentWillMount = async () => {
        window.scrollTo(0, 0);
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        var day = getFirstDayOfWeek(52);
        var wdays = getWeekDays(year, month, day);
        console.log(wdays)
        this.setState({
            weekDays: wdays
        })
        //
        // var userData: UserFullData = await getUserFullData();
        // console.log(userData.avatar)
        //
        // localStorage.setItem("image", "");
        // localStorage.setItem("image", userData.avatar);

    }


    printFunction = () => {
        window.print();
    }

    handleWeekDate = (e: ChangeEvent<HTMLInputElement>): void=> {
        var date = e.target.value
        var newDate = date.split(/-W/)
        var year = parseInt(newDate[0])
        var week = parseInt(newDate[1])
        var day = getFirstDayOfWeek(week);
        var month = Math.floor(week/4 -1);
        var wdays = getWeekDays(year, month, day);
        console.log(wdays)
        this.setState({
            weekDays: wdays
        })
    }

    getWeek = (date: Date): number =>{
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }


    getWeekDays = (weekNo:number, year:number): string=> {
        var d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
        d1 = new Date(''+year+'');
        numOfdaysPastSinceLastMonday = d1.getDay() - 1;
        d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
        d1.setDate(d1.getDate() + (7 * (weekNo - this.getWeek(d1))));
        rangeIsFrom = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear();
        d1.setDate(d1.getDate() + 6);
        rangeIsTo = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear() ;
        return rangeIsFrom + " to " + rangeIsTo;
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


    ShowMinicardsOfDate = (date: string) => {
        this.state.cards.filter(card => card.due.includes(date)).map(card => (
            <MiniCardBase
                mcard={card}
            ></MiniCardBase>)
        )
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
                            <input id="week" defaultValue="2020-W52" type="week" name="week" onChange={this.handleWeekDate} ></input>
                            </div>
                </div>
                <div className="tbl-content">
                <div className="row">
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[0] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[0] ? "white" : ""}}>
                        <p style={{fontSize: '1.5rem'}}>Monday</p>
                    </div>
                    <div id="Mon" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[0] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[0])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[1] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[1] ? "white" : ""}}>
                        <p style={{fontSize: '1.5rem'}}>Tuesday</p>
                    </div>
                    <div id="Tue" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[1] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[1])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[2] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[2] ? "white" : ""}}>
                        <p style={{fontSize: '1.5rem'}}>Wednesday</p>
                    </div>
                    <div id="Wed" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[2] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[2])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-3 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[3] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[3] ? "white" : ""}}>
                        <p style={{fontSize: '1.5rem'}}>Thursday</p>
                    </div>
                    <div id="Thu" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[3] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[3])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="total-hdr col-lg-3 col-md-4 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[4] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[4] ? "white" : ""}}>
                        <p style={{fontSize: '1.5rem'}}>Friday</p>
                    </div>
                    <div id="Fri" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[4] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[4])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
                    </div>
                    </div>

                    <div className="total-hdr col-lg-3 col-md-4 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[5] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[5] ? "white" : ""}}>
                        <p style={{fontSize: '1.5rem'}}>Saturday</p>
                    </div>
                    <div id="Sat" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[5] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[5])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
                    </div>
                    </div>
                    <div className="total-hdr col-lg-3 col-md-4 col-sm-6">
                    <div className="hdr-minicard" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[6] ? "#505050" : "", color: ConvertDate(new Date)==this.state.weekDays[6] ? "white" : ""}}>
                                <p style={{fontSize: '1.5rem'}}>Sunday</p>
                    </div>
                    <div id="Sun" style={{backgroundColor: ConvertDate(new Date)==this.state.weekDays[6] ? "#3EECAC" : ""}}>
                        {
                            this.state.cards.filter(card => card.due.includes(this.state.weekDays[6])).map(card => (
                                <MiniCardBase
                                    mcard={card}
                                ></MiniCardBase>)
                            )
                        }
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
            </div>
          
        );
    }
}


export default Dashboard;