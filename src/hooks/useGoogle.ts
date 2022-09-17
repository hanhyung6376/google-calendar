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
                [week[date.getDay()]]: [
                    ...calendar[week[date.getDay()]],
                    { id: `${calendar[week[date.getDay()]].length}`, summary, description, visibility }
                ]
            });
            alert('add event success');
        } catch (err) {
            alert('add event failed');
        }
    };

    const getCalendar = async (now: Date) => {
        const [startTime, endTime] = getPeriod(now);
        try {
            const result = await getCalendarAPI({ start: startTime, end: endTime });

            const calendarList = result.data.items.reduce((acc: Items[], cur: Calendar) => {
                const { id, summary, description, start, visibility } = cur;
                console.log(visibility);
                return [...acc, { id, summary, description, start, visibility: visibility !== undefined ? visibility : 'default' }];
            }, []);

            const data = calendarList.reduce(
                (acc: CalendarData, cur: Items) => {
                    const weekDay = week[new Date(cur.start.dateTime).getDay()];
                    const { id, summary, description, visibility } = cur;

                    return { ...acc, [weekDay]: [...acc[weekDay], { id, summary, description, visibility }] };
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
            alert('calendar load error');

            return null;
        }
    };

    return { insert, getCalendar };
};

export default useGoogle;
