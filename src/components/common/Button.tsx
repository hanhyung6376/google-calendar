import styled, { css } from 'styled-components';
import { ReactNode, CSSProperties } from 'react';
import { ButtonProps } from 'types/components';

const ButtonStyle = styled.button<ButtonProps>`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gray[1]};
    &:hover {
        background: ${({ theme }) => theme.colors.gray[2]};
    }
    ${(props) =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}
    ${(props) =>
        props.cyan &&
        css`
            background: ${({ theme }) => theme.colors.cyan[1]};
            &:hover {
                background: ${({ theme }) => theme.colors.cyan[2]};
            }
        `}

  ${(props) =>
        props.gray &&
        css`
            background: ${({ theme }) => theme.colors.gray[4]};
            &:hover {
                background: ${({ theme }) => theme.colors.gray[3]};
            }
        `}

  ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `}
  ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `}
  ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `}

  ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `}
    &:disabled {
        background: ${({ theme }) => theme.colors.gray[1]};
        color: ${({ theme }) => theme.colors.gray[2]};
        cursor: not-allowed;
    }
`;

const Button = (props: ButtonProps) => {
    return <ButtonStyle {...props} />;
};

export default Button;
