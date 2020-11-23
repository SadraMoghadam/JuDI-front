
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

export const repeat_days = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];

export const Categories = ["sport", "work", "study", "educational", "others"]

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