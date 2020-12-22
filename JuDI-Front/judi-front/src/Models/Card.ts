import {number} from "prop-types";


export interface Card {
    id: number,
    title: string,
    description: string,
    due: string,
    category_id: number,
    label: string,
    with_star: boolean,
    reminder: boolean,
    is_done: boolean,
    is_repetitive: boolean,
    repeat_days: string[]
}

export interface CardPost {
    id: number,
    title: string,
    description: string,
    due: string,
    category_id: number,
    label: string,
    with_star: boolean,
    reminder: boolean,
    is_done: boolean,
    is_repetitive: boolean,
    repeat_days: string[]
}

export interface CardGet {
    id: number,
    title: string,
    user_id: number
    description: string,
    due: string,
    category_id: number,
    created_at: string,
    updated_at: string,
    label_name: string,
    with_star: boolean,
    reminder: boolean,
    is_done: boolean,
    is_repetitive: boolean,
    repeat_id: number
}

export const repeat_days = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];


export const WeekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const Categories = ["sport", "work", "study", "educational", "others"]

export var ConvertDate = (date:Date) : string =>{
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    //new Date(Number(newDate[0]), Number(newDate[1]) - 1, Number(newDate[2]), Number(newDate[3]), Number(newDate[4]))
    //return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + "T" + date.getHours() + ":" + date.getMinutes()
    return year + "-" + month + "-" + day
}

export var ConvertId2Category = (categoryId:number) : string => {
    switch (categoryId) {
        case 0:
            return Categories[0]
        case 1:
            return Categories[1]
        case 2:
            return Categories[2]
        case 3:
            return Categories[3]
        case 4:
            return Categories[4]
        default:
            return Categories[4]
    }
}

export var ConvertCategory2Id = (category:string) : number => {
    switch (category) {
        case Categories[0]:
            return 0
        case Categories[1]:
            return 1
        case Categories[2]:
            return 2
        case Categories[3]:
            return 3
        case Categories[4]:
            return 4
        default:
            return 4
    }
}

var today: Date = new Date();

export var ConvertTodayDate = () : string => {
    var day:string = "";
    switch (today.getDay()) {
        case 0:
            day = "sun";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 4:
            day = "thu";
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "sat";
            break;
        default:
            day = "fri";
            break;
    }
    return day;
}


export var GetRepetitiveDate1 = (day: string) : string => {
    var newDate: Date = new Date()
    var today: string = ConvertTodayDate();
    var id: number = 0
    for (let i = 0; i < 7; i++) {
        if(today == WeekDays[i]) {
            id = i;
            break;
        }
    }
    console.log("id======" + id)
    for (let i = id; i < 7; i++) {
        if(day == WeekDays[i]) {
            var temp1: number = (i - id)
            newDate.setDate(newDate.getDate() + temp1)
            console.log("i1======" + i)
        }
    }
    console.log("___________"+newDate.getUTCDate())
    console.log("day2========"+newDate.getDay())
    for (let i = 0; i < id; i++) {
        var temp2: number = (id + i - 1)
        if(day == WeekDays[i]){
            newDate.setDate(newDate.getDate() + temp2)
            console.log("i2======" + i)
        }
    }
    console.log("day2========"+newDate.getDay())
    console.log("++++++++++++" + newDate)
    return ConvertDate(newDate)
}

export var GetRepetitiveDate = (day: string) : string => {
    var counter: number = 0;
    var newDate: Date = new Date()
    var today: string = ConvertTodayDate();
    var hasFound: boolean = false
    var id: number = 0
    for (let i = 0; i < 7; i++) {
        if(today == WeekDays[i]) {
            id = i;
            break;
        }
    }
    console.log("id======" + id)
    for (let i = id + 1; i < 7; i++) {
        if(day == WeekDays[i]) {
            hasFound = true;
            counter++;
            break
        }
        else
            counter++;
    }
    if(!hasFound)
    {
        for (let i = 0; i <= id; i++) {
            if(day == WeekDays[i]) {
                hasFound = true;
                counter++;
                break
            }
            else
                counter++;
        }
    }
    newDate.setDate(newDate.getDate() + ++counter)
    return ConvertDate(newDate)
}



export interface Label {
    id: number
    name: string
}

export interface LabelGet {
    id: number,
    user_id: number,
    name: string
}

export var getWeekDays = (year: number, month: number, firstDay: number) : string[] => {
    var weekDays: string[] = [];
    for (var i = 0; i < 7; i++)
    {
        weekDays.push((year.toString() + "-" + month.toString() + "-" + (firstDay + i).toString()));
    }
    return weekDays;
}

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


export var getFirstDayOfWeek = (week: number) : number => {
    //var currentWeekNumber = require('week');
    var year = new Date().getFullYear()
    var thatdate = getDateOfWeek(week, year).toString();
    console.log(getDateOfWeek(week,year))
    var day = thatdate.substring(8,10);
    return Number(day);
}
