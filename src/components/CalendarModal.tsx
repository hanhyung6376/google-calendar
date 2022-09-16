import React, { FC } from 'react';
import { Flex, Button, Modal, Text } from 'components/common';
import { useRecoilState } from 'recoil';
import { calendarModalAtom } from '../store';

const CalendarModal: FC = () => {
    const [item, setItem] = useRecoilState(calendarModalAtom);

    const onVisible = () => {
        setItem({ ...item, visible: false });
    };

    if (!item.visible) {
        return null;
    }

    return (
        <Modal>
            <Flex container flexDirection="column" justifyContent="center" alignItems="center">
                <Text>일정: {item.summary}</Text>
                <Text>내용: {item.description}</Text>
                <Text>종류: {item.visibility}</Text>
                <Button onClick={onVisible}>확인</Button>
            </Flex>
        </Modal>
    );
};

export default CalendarModal;
