import client from 'api/client';
import * as api from 'types/api';

export const insert = ({ summary, description, visibility, date }: api.insertVariables) =>
    client.post(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
            summary: summary,
            description: description,
            start: {
                dateTime: date,
                timeZone: 'Asia/Seoul'
            },
            end: {
                dateTime: date,
                timeZone: 'Asia/Seoul'
            },
            attendees: [{ email: 'gksgud3720@gmail.com' }, { email: 'gksgud3720@gmail.com' }],
            reminders: {
                useDefault: false
            },
            visibility: visibility
        }
    );

export const getCalendar = ({ start, end }: api.getCalendarVariables) =>
    client.get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
            params: {
                timeMin: start,
                timeMax: end
            }
        }
    );
