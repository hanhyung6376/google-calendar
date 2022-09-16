import { atom } from 'recoil';
import { CalendarModalAtom, InsertModalAtom } from 'types/store';
import { CalendarData } from '../types/google';

export const dateAtom = atom<Date>({
    key: 'date',
    default: new Date()
});

export const insertModalAtom = atom<InsertModalAtom>({
    key: 'insertModal',
    default: {
        visible: false,
        date: new Date()
    }
});

export const calendarModalAtom = atom<CalendarModalAtom>({
    key: 'calendarModal',
    default: {
        visible: false,
        summary: '',
        description: '',
        visibility: ''
    }
});

export const calendarAtom = atom<CalendarData>({
    key: 'calendar',
    default: {
        SUN: [],
        MON: [],
        TUE: [],
        WED: [],
        THU: [],
        FRI: [],
        SAT: []
    }
});
