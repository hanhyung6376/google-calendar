import { FC } from 'react';
import { CalendarProps } from 'types/components';
import { List } from 'components';
import { Flex } from 'components/common';

const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Calendar: FC<CalendarProps> = ({ items, week }) => {
    return (
        <>
            <Flex container flexDirection="row" justifyContent="space-between">
                {day.map((value, index) => (
                    <List day={value} date={week[index]} items={items[value]} />
                ))}
            </Flex>
        </>
    );
};

export default Calendar;
