import styled, { css } from 'styled-components';
import { TextProps } from 'types/components';

const Text = styled.p<TextProps>`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray[6]};
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `}
    ${(props) =>
        props.variant &&
        css`
            font-size: ${({ theme }) => (props.variant ? theme.font[props.variant] : null)};
            font-weight: bold;
        `}
    ${(props) =>
        props.fontWeight &&
        css`
            font-weight: ${props.fontWeight};
        `}
    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `};
`;

export default Text;
