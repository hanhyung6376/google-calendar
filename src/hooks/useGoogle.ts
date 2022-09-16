import { insert as insertAPI, getCalendar as getCalendarAPI } from 'api/google';
import * as api from 'types/api';
import { Calendar, Items, CalendarData } from 'types/google';
import { getPeriod } from '../utils/date';
import { useRecoilState } from 'recoil';
import { calendarAtom } from '../store';

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const useGoogle = () => {
    const [calendar, setCalendar] = useRecoilState(calendarAtom);
    const insert = async ({ summary, description, visibility, date }: api.insertVariables) => {
        try {
            await insertAPI({ summary, description, visibility, date });
            setCalendar({
                ...calendar,
                [week[date.getDay()]]: [...calendar[week[date.getDay()]], { summary, description, visibility }]
            });
            alert('add event success');
        } catch (err) {
            console.log(err);
            alert('add event failed');
        }
    };

    const getCalendar = async (now: Date) => {
        const [startTime, endTime] = getPeriod(now);
        try {
            const result = await getCalendarAPI({ start: startTime, end: endTime });

            const calendarList = result.data.items.reduce((acc: Items[], cur: Calendar) => {
                const { id, summary, description, start, visibility } = cur;

                return [...acc, { id, summary, description, start, visibility }];
            }, []);

            const data = calendarList.reduce(
                (acc: CalendarData, cur: Items) => {
                    const weekDay = week[new Date(cur.start.dateTime).getDay()];
                    const { summary, description, visibility } = cur;

                    return { ...acc, [weekDay]: [...acc[weekDay], { summary, description, visibility }] };
                },
                {
                    SUN: [],
                    MON: [],
                    TUE: [],
                    WED: [],
                    THU: [],
                    FRI: [],
                    SAT: []
                }
            );

            return data;
        } catch (err) {
            console.log(err);
            alert('calendar load error');

            return null;
        }
    };

    return { insert, getCalendar };
};

export default useGoogle;
