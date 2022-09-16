export interface CalendarModalAtom {
    visible: boolean;
    summary: string;
    description: string;
    visibility: string;
}

export interface InsertModalAtom {
    visible: boolean;
    date: Date;
}
