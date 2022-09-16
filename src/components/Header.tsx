import { FC } from 'react';
import { HeaderProps } from 'types/components';
import { Flex, Button, Text } from 'components/common';
import { transWeek } from 'utils/date';

const Header: FC<HeaderProps> = ({ onPrev, onNext, now }) => {
    return (
        <Flex container flexDirection="row" justifyContent="center" alignItems="center" spacing="3rem">
            <Button onClick={onPrev}>&lt;</Button>
            <Text variant="h3">{transWeek(now)}</Text>
            <Button onClick={onNext}>&gt;</Button>
        </Flex>
    );
};

export default Header;
