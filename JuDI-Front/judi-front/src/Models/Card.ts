
export interface Card {
    id: number,
    title: string,
    description: string,
    due: Date,
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
    // label: string,
    with_star: boolean,
    reminder: boolean,
    is_done: boolean,
    is_repetitive: boolean,
    repeat_id: number
}

export const repeat_days = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];

export interface miniCard{
    id: number,
    title: string,
    with_star: boolean
}

export const WeekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const Categories = ["sport", "work", "study", "educational", "others"]

export var ConvertDate = (date:Date) : string =>{
    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + "T" + date.getHours() + ":" + date.getMinutes()
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

export var ConvertTodayDate = () : string => {
    var day:string = "";
    switch (new Date().getDay()) {
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


export var GetRepetitiveDate = (date: Date, day: string) : Date => {
    var newDate: Date =date
    var today: string = ConvertTodayDate();
    var id: number = 0
    for (let i = 0; i < 7; i++) {
        if(today == WeekDays[i])
            id = i
    }
    for (let i = id; i < 7; i++) {
        if(day == WeekDays[i])
            newDate.setDate(newDate.getDate() + (i - id))
    }
    for (let i = 0; i < id; i++) {
        if(day == WeekDays[i])
            newDate.setDate(newDate.getDate() + (id - i))
    }
    return newDate
}

