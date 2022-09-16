import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const FullBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
`;

const BaseBox = styled.div`
    display: flex;
    background-color: white;
    width: 70%;
    height: 80%;
    border: 1px solid ${({ theme }) => theme.colors.gray[0]};
    border-radius: 5px;
    margin-top: 16px;
`;

const Box: FC<PropsWithChildren> = ({ children }) => {
    return (
        <FullBox>
            <BaseBox>{children}</BaseBox>
        </FullBox>
    );
};

export default Box;
