
export interface Card {
    id: number,
    title: string,
    description: string,
    due: Date,
    category_id: string,
    label: string,
    with_star: boolean,
    reminder: boolean,
    is_done: boolean,
    isRepetitive: boolean,
    weekDays: string[]
}

export interface miniCard{
    id: number,
    title: string,
    with_star: boolean
}

export const WeekDays = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];

export const Categories = ["sport", "work", "study", "educational", "others"]