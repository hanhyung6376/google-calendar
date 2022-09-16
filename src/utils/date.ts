export const getPeriod = (now: Date) => {
    const start = new Date(new Date(now.setDate(now.getDate() - now.getDay())).setHours(0, 0, 0, 0));
    const end = new Date(new Date(now.setDate(now.getDate() - now.getDay() + 6)).setHours(23, 59, 59, 59));
    return [start, end];
};

export const getWeek = (now: Date) => {
    const start = new Date(now.setDate(now.getDate() - now.getDay()));
    const week = [start];
    for (let i = 0; i < 6; i++) {
        week.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i + 1));
    }

    return week;
};

export const transWeek = (now: Date) => {
    return `${now.getMonth() + 1}월 ${Math.ceil(now.getDate() / 7)}주`;
};

export const prevWeek = (now: Date) => new Date(now.setDate(now.getDate() - 7));

export const nextWeek = (now: Date) => new Date(now.setDate(now.getDate() + 7));

export const isSame = (date1: Date, date2: Date) => {
    return date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

export const getMonthDay = (date: Date) => `${date.getMonth()}-${date.getDate()}`;
