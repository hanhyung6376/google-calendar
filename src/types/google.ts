export interface Calendar {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    create: Date;
    updated: Date;
    summary: string;
    description: string;
    creator: creator;
    organizer: creator;
    start: date;
    end: date;
    iCalUID: string;
    sequence: number;
    attendees: attendees;
    reminders: {
        useDefault: boolean;
    };
    eventType: string;
    visibility: string;
}

interface creator {
    email: string;
    self: string;
}

interface date {
    dateTime: string;
    timeZone: string;
}

interface attendees {
    email: string;
    organizer: boolean;
    self: boolean;
    responseStatus: string;
}

export interface Items {
    id: string;
    summary: string;
    description: string;
    visibility: string;
    start: date;
}

export interface CalendarItems {
    id: string;
    summary: string;
    description: string;
    visibility: string;
}

export interface CalendarData {
    [index: string]: CalendarItems[];
}
