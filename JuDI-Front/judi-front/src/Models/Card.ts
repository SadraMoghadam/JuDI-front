
export interface Card {
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    category: string,
    label: string,
    isImportant: boolean,
    reminder: boolean,
    done: boolean,
    isRepetitive: boolean,
    weekDays: string[]
}

export const WeekDays = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];

export const Categories = ["sport", "work", "study", "educational", "others"]