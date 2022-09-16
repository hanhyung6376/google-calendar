import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ListProps } from 'types/components';
import { Flex, Text, Button } from 'components/common';
import { calendarModalAtom, insertModalAtom } from '../store';
import { CalendarItems } from '../types/google';

const List: FC<ListProps> = ({ day, date, items }) => {
    const [, setCalendarModal] = useRecoilState(calendarModalAtom);
    const [, setInsertModal] = useRecoilState(insertModalAtom);
    const [hover, setHover] = useState<boolean>(false);

    const onClick = (item: CalendarItems) => {
        const { summary, description, visibility } = item;
        setCalendarModal({ summary, description, visibility, visible: true });
    };

    const onInsert = () => {
        setInsertModal({ date: date, visible: true });
    };

    return (
        <Flex
            container
            flexDirection="column"
            alignItems="center"
            spacing="2rem"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Text variant="h3">{day}</Text>
            <Flex container flexDirection="column" alignItems="center" spacing="1rem">
                {items.map((value) => (
                    <Text fontSize="8px" onClick={() => onClick(value)} key={`${value.summary}-${date}`}>
                        - {value.summary}
                    </Text>
                ))}
                {hover ? <Button onClick={onInsert}>+</Button> : null}
            </Flex>
        </Flex>
    );
};

export default List;
