import { useEffect, useState, FC, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import useGoogle from 'hooks/useGoogle';
import { Header, Box, InsertModal, Calendar } from 'components';
import { Flex } from 'components/common';
import { prevWeek, nextWeek, getWeek } from 'utils/date';
import { calendarAtom, dateAtom } from '../store';
import CalendarModal from '../components/CalendarModal';

const Main: FC = () => {
    const [now, setNow] = useRecoilState(dateAtom);
    const [calendar, setCalendar] = useRecoilState(calendarAtom);
    const [week, setWeek] = useState<Date[]>(getWeek(now));
    const { getCalendar } = useGoogle();

    const getCalendarList = async () => {
        const result = await getCalendar(now);

        setCalendar(result);
    };

    useEffect(() => {
        setWeek(getWeek(now));
        getCalendarList();
    }, [now]);

    const onNext = useCallback(() => {
        setNow(nextWeek(now));
    }, [now]);

    const onPrev = useCallback(() => {
        setNow(prevWeek(now));
    }, [now]);

    return (
        <>
            <Box>
                <Flex container flexDirection="column" alignItems="center" spacing="2rem">
                    <Header onNext={onNext} onPrev={onPrev} now={now} />
                    <Calendar items={calendar} week={week} />
                </Flex>
            </Box>
            <InsertModal />
            <CalendarModal />
        </>
    );
};

export default Main;
